import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  BG_IMAGE_URL,
  SHORT_COMPANY_NAME,
} from '../../constants/branding';
import Navigation from '../home/0-nav';

export default function SplashSection() {
  const navbarRef = useRef<HTMLElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const [scrolledBelowSplash, setScrolledBelowSplash] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        navbarRef.current &&
        nextSectionRef.current &&
        navbarRef.current.clientHeight >
        nextSectionRef.current.getBoundingClientRect().top
      ) {
        if (!scrolledBelowSplash) setScrolledBelowSplash(true);
      } else {
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
        <img src={BG_IMAGE_URL} className="hidden" alt="Background" />
        <div className="absolute inset-0 z-0 bg-black/25" />
        
        <Navigation scrolledBelowSplash={scrolledBelowSplash} />

        <div className="relative grid mx-auto items-center gap-x-16 gap-y-12 overflow-hidden pt-28 container xl:grid-cols-2 xl:h-screen xl:max-h-2xl xl:min-h-140">
          <div className="flex flex-col px-2 text-center xl:text-left">
            <h2 className="select-none text-3xl text-white font-light font-display drop-shadow-md lg:text-4xl xl:text-5xl">
              Coming Soon
            </h2>
            <p className="mt-4 text-xl text-white/75 font-300">
              {SHORT_COMPANY_NAME} Bare Metal
            </p>
            <p className="mt-4 text-lg text-white/75 font-300">
              We're working on something exciting! Our bare metal solutions will be available soon.
              Stay tuned for updates on our high-performance, dedicated hardware offerings.
            </p>
          </div>
          <div className="mx-auto block px-2 container w-full max-w-md xl:max-w-lg">
            <div className="w-full rounded-t transition-transform xl:rounded-b xl:hover:translate-0 hover:-translate-y-2 xl:hover:scale-105">
              <img 
                src="/src/assets/img/bl_logo_gradient_claw_only.png" 
                alt="Logo" 
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