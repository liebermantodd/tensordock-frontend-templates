import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  BG_IMAGE_URL,
  SHORT_COMPANY_NAME,
} from '../../constants/branding';
import {
  CUSTOM_REQUESTS_URL,
} from '../../constants/external';
import Navigation from '../home/0-nav'; // Import the Navigation component

export default function SplashSection() {
  const navbarRef = useRef(null);
  const nextSectionRef = useRef(null);

  const [scrolledBelowSplash, setScrolledBelowSplash] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        navbarRef.current.clientHeight >
        nextSectionRef.current.getBoundingClientRect().top
      ) {
        // we are below
        if (!scrolledBelowSplash) setScrolledBelowSplash(true);
      } else {
        // we are above
        if (scrolledBelowSplash) setScrolledBelowSplash(false);
      }
    };
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scrolledBelowSplash]);

  return (
    <>
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BG_IMAGE_URL})`,
          }}
        />
        {/* helps progressively load image */}
        <img src={BG_IMAGE_URL} className="hidden" alt="Background" />
        <div className="absolute inset-0 z-0 bg-black/25" />
        
        {/* Use the Navigation component here */}
        <Navigation scrolledBelowSplash={scrolledBelowSplash} ref={navbarRef} />

        {/* About Splash */}
        <div className="relative grid mx-auto items-center gap-x-16 gap-y-12 overflow-hidden pt-28 container xl:grid-cols-2 xl:h-screen xl:max-h-2xl xl:min-h-140">
          <div className="flex flex-col px-2 text-center xl:text-left">
            <h2 className="select-none text-3xl text-white font-light font-display drop-shadow-md lg:text-4xl xl:text-5xl">
              About {SHORT_COMPANY_NAME}
            </h2>
            <p className="mt-4 text-xl text-white/75 font-300">
              Pioneering AI Hosting with Unparalleled Experience
            </p>
            <p className="mt-4 text-lg text-white/75 font-300">
              With over two decades of telecom expertise and a track record of hosting 250,000+ sites, 
              we've evolved to become leaders in AI and HPC cloud solutions. Our massive, scalable NVIDIA GPU cloud 
              is designed to meet your most demanding workloads.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-x-1 gap-y-6 md:flex-row xl:justify-start">
              <a
                target="_blank"
                href={CUSTOM_REQUESTS_URL}
                className="inline-block select-none rounded-btn px-6 py-2.5 text-white font-medium font-display ring-2 ring-white ring-inset transition-colors hover:bg-white hover:text-gray-6"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="mx-auto block px-2 container w-full max-w-md xl:max-w-lg">
            <div className="w-full rounded-t transition-transform xl:rounded-b xl:hover:translate-0 hover:-translate-y-2 xl:hover:scale-105">
              <img 
                src="/src/assets/img/bl_logo_gradient_claw_only.png" 
                alt="BrightLoom Logo" 
                className="w-full h-auto object-contain max-h-64 xl:max-h-96" 
              />
            </div>
          </div>
        </div>
      </section>
      <div ref={nextSectionRef} />
    </>
  );
}