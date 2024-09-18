#!/usr/bin/env python3

import subprocess
import time
import sys
import signal
import argparse
import atexit
import re
import os
import json

def parse_arguments():
    parser = argparse.ArgumentParser(description="SSH SOCKS Proxy with auto-reconnect and automatic network settings")
    parser.add_argument("user", help="SSH username")
    parser.add_argument("host", help="SSH host")
    parser.add_argument("-p", "--port", type=int, default=22, help="SSH port (default: 22)")
    parser.add_argument("-D", "--dynamic-port", type=int, default=1080, help="Local SOCKS proxy port (default: 1080)")
    parser.add_argument("-i", "--identity", help="Path to SSH identity file")
    parser.add_argument("-k", "--keepalive", type=int, default=60, help="SSH keepalive interval in seconds (default: 60)")
    return parser.parse_args()

def create_ssh_command(args):
    cmd = [
        "ssh",
        "-ND", str(args.dynamic_port),
        "-o", f"ServerAliveInterval={args.keepalive}",
        "-o", "ServerAliveCountMax=3",
        "-o", "ExitOnForwardFailure=yes",
        "-o", "StrictHostKeyChecking=no",
    ]
    
    if args.identity:
        cmd.extend(["-i", args.identity])
    
    cmd.extend([
        "-p", str(args.port),
        f"{args.user}@{args.host}"
    ])
    
    return cmd

def get_active_network_service():
    result = subprocess.run(["route", "-n", "get", "default"], capture_output=True, text=True)
    match = re.search(r"interface: (\w+)", result.stdout)
    if match:
        interface = match.group(1)
        services = subprocess.run(["networksetup", "-listallhardwareports"], capture_output=True, text=True)
        for line in services.stdout.split('\n'):
            if interface in line:
                return services.stdout.split('\n')[services.stdout.split('\n').index(line) - 1].split(': ')[1]
    return None

def save_original_settings(service):
    proxy_state = subprocess.run(["networksetup", "-getsocksfirewallproxy", service], capture_output=True, text=True).stdout
    enabled = "Yes" in proxy_state
    server = re.search(r"Server: (.+)", proxy_state)
    port = re.search(r"Port: (\d+)", proxy_state)
    
    original_settings = {
        "service": service,
        "enabled": enabled,
        "server": server.group(1) if server else None,
        "port": port.group(1) if port else None
    }
    
    with open("/tmp/socks_proxy_original_settings.json", "w") as f:
        json.dump(original_settings, f)

def restore_original_settings():
    try:
        with open("/tmp/socks_proxy_original_settings.json", "r") as f:
            settings = json.load(f)
        
        service = settings["service"]
        if settings["enabled"]:
            subprocess.run(["sudo", "networksetup", "-setsocksfirewallproxy", service, settings["server"], settings["port"]])
        else:
            subprocess.run(["sudo", "networksetup", "-setsocksfirewallproxystate", service, "off"])
        
        print(f"Original SOCKS proxy settings restored for {service}")
        os.remove("/tmp/socks_proxy_original_settings.json")
    except FileNotFoundError:
        print("No original settings found to restore.")
    except Exception as e:
        print(f"Error restoring original settings: {e}")

def enable_socks_proxy(port):
    service = get_active_network_service()
    if service:
        save_original_settings(service)
        subprocess.run(["sudo", "networksetup", "-setsocksfirewallproxy", service, "127.0.0.1", str(port)])
        subprocess.run(["sudo", "networksetup", "-setsocksfirewallproxystate", service, "on"])
        print(f"SOCKS proxy enabled for {service}")
    else:
        print("Could not determine active network service. SOCKS proxy not enabled.")

def disable_socks_proxy():
    restore_original_settings()

def run_ssh_proxy(cmd, args):
    def cleanup(signum=None, frame=None):
        disable_socks_proxy()
        sys.exit(0)
    
    signal.signal(signal.SIGTERM, cleanup)
    signal.signal(signal.SIGINT, cleanup)
    atexit.register(cleanup)
    
    while True:
        try:
            print("Starting SSH SOCKS proxy...")
            enable_socks_proxy(args.dynamic_port)
            process = subprocess.Popen(cmd)
            process.wait()
        except KeyboardInterrupt:
            print("\nSSH SOCKS proxy stopped by user.")
            sys.exit(0)
        except Exception as e:
            print(f"Error: {e}")
        
        print("Connection lost. Reconnecting in 5 seconds...")
        time.sleep(5)

def main():
    args = parse_arguments()
    cmd = create_ssh_command(args)
    
    print(f"SSH SOCKS proxy will listen on 127.0.0.1:{args.dynamic_port}")
    print("SOCKS proxy will be automatically configured for the active network connection.")
    print("Press Ctrl+C to stop the proxy.")
    
    run_ssh_proxy(cmd, args)

if __name__ == "__main__":
    main()
