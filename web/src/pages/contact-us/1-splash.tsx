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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

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
            <div className="flex flex-col">
              <h2 className="select-none text-2xl text-white font-light font-display drop-shadow-md sm:text-3xl lg:text-4xl xl:text-5xl mb-6">
                Contact {SHORT_COMPANY_NAME}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-3 py-2 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-white mb-1">Company</label>
                  <input type="text" id="company" name="company" className="w-full px-3 py-2 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-3 py-2 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white mb-1">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div>
                  <label htmlFor="note" className="block text-white mb-1">Note</label>
                  <textarea id="note" name="note" rows={4} className="w-full px-3 py-2 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-block select-none rounded-btn px-6 py-2.5 text-white font-medium font-display ring-2 ring-white ring-inset transition-colors hover:bg-white hover:text-gray-6">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="mx-auto w-full max-w-md lg:max-w-none flex items-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.628802668005!2d-75.54955912402195!3d39.74798827155489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd3f13672497%3A0x3b12f70fa95f823!2s1201%20North%20Market%20Street%2C%201201%20N%20Market%20St%2C%20Wilmington%2C%20DE%2019801!5e0!3m2!1sen!2sus!4v1726118984416!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <div ref={nextSectionRef} />
    </>
  );
}