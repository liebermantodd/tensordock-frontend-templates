import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  BG_IMAGE_URL,
  SHORT_COMPANY_NAME,
} from '../../constants/branding';
import {
  CONTACT_US_URL,
} from '../../constants/external';
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
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BG_IMAGE_URL})`,
          }}
        />
        <img src={BG_IMAGE_URL} className="hidden" alt="Background" />
        <div className="absolute inset-0 z-0 bg-black/25" />
        
        <Navigation scrolledBelowSplash={scrolledBelowSplash} />

        <div className="relative mx-auto px-4 py-16 container lg:py-24 xl:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col text-center lg:text-left">
              <h2 className="select-none text-2xl text-white font-light font-display drop-shadow-md sm:text-3xl lg:text-4xl xl:text-5xl">
                {SHORT_COMPANY_NAME} Data Center
              </h2>
              <p className="mt-4 text-lg text-white/75 font-300 sm:text-xl">
                Wilmington, Delaware Facility
              </p>
              <p className="mt-4 text-base text-white/75 font-300 sm:text-lg">
                Our Tier 3 facility in Wilmington is operated by DaStor, the largest provider of data center space across the Delaware Valley.  Strategically positioned between New York and the northen Virginia data center market, this purpose-built facility offers:
              </p>
              <ul className="mt-2 text-base text-white/75 font-300 list-disc list-inside sm:text-lg">
                <li>23,000 SF of DāStor capacity</li>
                <li>1500+ watts per square foot power density</li>
                <li>Highly redundant configuration for high-density environments</li>
                <li>Locking cabinets and private cages for enterprise applications</li>
                <li>Network-neutral setup with multiple carriers and redundant fiber ring</li>
                <li>Multilayered security with annual SSAE18 audits</li>
              </ul>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href={CONTACT_US_URL}
                  className="inline-block select-none rounded-btn px-6 py-2.5 text-white font-medium font-display ring-2 ring-white ring-inset transition-colors hover:bg-white hover:text-gray-6"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="w-full rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2 hover:scale-105">
                <img 
                  src="/src/assets/img/1201-n-market-st-wilmington-de.jpg" 
                  alt="Wilmington Data Center Facility" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ref={nextSectionRef} />
    </>
  );
}