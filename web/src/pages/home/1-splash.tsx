import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

import {
  BG_IMAGE_URL,
  SHORT_COMPANY_NAME,
} from '../../constants/branding';
import {
  BARE_METAL_URL,
} from '../../constants/external';
import { ROUTES } from '../../constants/pages';

import DeployImage from '../../assets/img/deploy.png';
import Navigation from './0-nav'; // Assuming you'll create this file

export default function SplashSection() {
  const [isHoveringBareMetalServers, setIsHoveringBareMetalServers] = useState(false);
  const [scrolledBelowSplash, setScrolledBelowSplash] = useState(false);

  const navbarRef = useRef(null);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (navbarRef.current && nextSectionRef.current) {
        const navbarHeight = navbarRef.current.clientHeight;
        const nextSectionTop = nextSectionRef.current.getBoundingClientRect().top;

        if (navbarHeight > nextSectionTop) {
          if (!scrolledBelowSplash) setScrolledBelowSplash(true);
        } else {
          if (scrolledBelowSplash) setScrolledBelowSplash(false);
        }
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scrolledBelowSplash]);

  return (
    <>
      <section className={`relative ${scrolledBelowSplash ? 'bg-white' : ''}`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BG_IMAGE_URL})`,
          }}
        />
        <img src={BG_IMAGE_URL} className="hidden" />
        <div className="absolute inset-0 z-0 bg-black/25" />
        
        <Navigation scrolledBelowSplash={scrolledBelowSplash} />
        <div ref={navbarRef} /> {/* Add this line */}

        <div className="relative grid mx-auto items-center gap-x-16 gap-y-12 overflow-hidden pt-28 container xl:grid-cols-2 xl:h-screen xl:max-h-2xl xl:min-h-140">
          <div className="flex flex-col px-2 text-center xl:text-left">
            <h2 className="select-none text-3xl text-white font-light font-display drop-shadow-md lg:text-4xl xl:text-5xl">
              The{` `}
              <ReactTyped
                className="fw-bold"
                strings={['ML', 'acceleration', 'HPC', 'rendering']}
                typeSpeed={50}
                loop={true}
                backDelay={1500}
              />
              cloud
            </h2>
            <p className="mt-4 text-xl text-white/75 font-300">
              {SHORT_COMPANY_NAME} operates a massive, scalable NVIDIA GPU cloud
              for your most demanding HPC workloads
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-x-1 gap-y-6 md:flex-row xl:justify-start">
              <Link
                to={ROUTES.deployForm}
                className={`inline-block select-none rounded-btn ${isHoveringBareMetalServers ? 'bg-white/50' : 'bg-white'} px-6 py-2.5 text-gray-6 font-medium font-display transition-colors hover:bg-gray-6 hover:text-white`}
              >
                Virtual Machines
              </Link>
              <a
                target="_blank"
                href={BARE_METAL_URL}
                className="inline-block select-none rounded-btn px-6 py-2.5 text-white font-medium font-display ring-2 ring-white ring-inset transition-colors hover:bg-white hover:text-gray-6"
                onMouseEnter={() => setIsHoveringBareMetalServers(true)}
                onMouseLeave={() => setIsHoveringBareMetalServers(false)}
              >
                Bare Metal Servers
              </a>
            </div>
          </div>
          <Link
            to={ROUTES.deployForm}
            className="mx-auto block h-12 px-2 container lg:h-30 md:h-24 sm:h-16 xl:h-auto xl:max-w-xl"
          >
            <img
              src={DeployImage}
              alt="Deploy"
              className="w-full rounded-t transition-transform xl:rounded-b xl:hover:translate-0 hover:-translate-y-5 xl:hover:scale-102"
            />
          </Link>
        </div>
      </section>
      <div ref={nextSectionRef} />
    </>
  );
}