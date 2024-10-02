import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, FOOTER_TEXT } from '../../constants/branding';
import {
  ABOUT_URL,
  COMPANY_HOME_URL,
  COMPANY_ADDRESS,
  COMPANY_ADDRESS_2,
  CONTACT_EMAIL,
  DATACENTER_URL,
  VM_MANAGEMENT_API_URL,
  WEB_PORTAL_URL,
  FAST_WHISPER_URL,
  VLLM_URL,
  LLAMA_CHAT_URL,
  PRIVACY_POLICY_URL,
  AUP_URL,
  DPA_URL,
  TOS_URL
} from '../../constants/external';
import { ROUTES } from '../../constants/pages';

export default function FooterSection() {
  return (
    <footer className="bg-primary-950 pt-18">
      <div className="grid mx-auto mb-12 container md:grid-cols-[1fr_300px_300px_300px]">
        <div>
          <h3 className="px-4 text-xl text-white font-display">
            {COMPANY_NAME}
          </h3>
          <p className="mt-4 max-w-prose px-4 text-white/40">{FOOTER_TEXT}</p>
        </div>
        <div className="px-4">
          <h5 className="text-white opacity-85 mb-3">Company</h5>
          <ul className="mt-4 text-white/40">
            <li><Link to={ABOUT_URL} className="inline-block py-1 hover:text-white/80 hover:underline">About</Link></li>
            <li><Link to={DATACENTER_URL} className="inline-block py-1 hover:text-white/80 hover:underline">Datacenters</Link></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="inline-block py-1 hover:text-white/80 hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className="px-4">
          <h5 className="text-white opacity-85 mb-3">Virtual Machines</h5>
          <ul className="mt-4 text-white/40">
            <li><Link to={VM_MANAGEMENT_API_URL} target="_blank" className="inline-block py-1 hover:text-white/80 hover:underline">API</Link></li>
            <li><Link to={WEB_PORTAL_URL} target="_blank" className="inline-block py-1 hover:text-white/80 hover:underline">Dashboad</Link></li>
          </ul>
        </div>
        <div className="px-4">
          <h5 className="text-white opacity-85 mb-3">API's and Demos</h5>
          <ul className="mt-4 text-white/40">
            <li><Link to={FAST_WHISPER_URL} target="_blank" className="inline-block py-1 hover:text-white/80 hover:underline">Fast-Whisper</Link></li>
            <li><Link to={VLLM_URL} target="_blank" className="inline-block py-1 hover:text-white/80 hover:underline">vLLM</Link></li>
            <li><Link to={LLAMA_CHAT_URL} target="_blank" className="inline-block py-1 hover:text-white/80 hover:underline">Ollama Web Chat</Link></li>
          </ul>
        </div>
      </div>
 <div className="border-t-[1px] border-white/40 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-white/40 text-base">
            <Link to={PRIVACY_POLICY_URL} className="hover:text-white/80 hover:underline py-2">
              Privacy Policy
            </Link>
            <Link to={AUP_URL} className="hover:text-white/80 hover:underline py-2">
              Acceptable Use Policy
            </Link>
            <Link to={DPA_URL} className="hover:text-white/80 hover:underline py-2">
              Data Policy Agreement
            </Link>
            <Link to={TOS_URL} className="hover:text-white/80 hover:underline py-2">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-white/40 py-8">
        <div className="px-4 text-center text-white/40">
          {COMPANY_NAME} | {COMPANY_ADDRESS} | {COMPANY_ADDRESS_2} | <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white/80 hover:underline">Contact</a>
          <br />
          Copyright © 2024{' '}
          <a
            className="text-white/80 hover:underline"
            href={COMPANY_HOME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {COMPANY_NAME}
          </a>
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
