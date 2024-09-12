import { AnimatePresence, m } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  BG_IMAGE_URL,
  HOME_LOGO_IMAGE,
  LOGO_TEXT,
  SHORT_COMPANY_NAME,
  USE_LOGO_IMAGE,
} from '../../constants/branding';
import {
  CUSTOM_REQUESTS_URL,
  INFRASTRUCTURE_URL,
} from '../../constants/external';
import { ROUTES } from '../../constants/pages';
import useAuth from '../../hooks/use-auth';

const navLinks = [
  { text: 'Deploy', to: ROUTES.deployForm },
  { text: 'Infrastructure', to: INFRASTRUCTURE_URL },
];

export default function SplashSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null!);
  const nextSectionRef = useRef<HTMLDivElement>(null!);

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
  });

  const { loginInfo } = useAuth();

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
        <img src={BG_IMAGE_URL} className="hidden" />
        <div className="absolute inset-0 z-0 bg-black/25" />
        <nav
          className={`fixed top-0 z-1 w-full transition-all duration-300 ${scrolledBelowSplash ? 'bg-primary-950 shadow-lg' : 'bg-primary-950/0'} ${menuOpen && !scrolledBelowSplash ? 'lg:bg-primary-950/0 max-lg:bg-primary-950' : ''}`}
          ref={navbarRef}
        >
          <div className="mx-auto flex items-center px-4 py-3 container">
            <h1>
              <Link
                to={ROUTES.home}
                className="select-none text-3xl text-white font-extrabold font-display"
              >
                {USE_LOGO_IMAGE ? (
                  <img
                    src={HOME_LOGO_IMAGE}
                    alt={LOGO_TEXT}
                    className="h-[.9em] py-[.05em]"
                  />
                ) : (
                  LOGO_TEXT
                )}
              </Link>
            </h1>
            <ul className="ml-8 hidden font-medium font-display lg:flex">
              {/* Desktop navbar */}
              {navLinks.map(({ text, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-block px-2 py-1 text-sm text-white/60 font-display transition-colors hover:text-white/100"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-auto hidden font-medium font-display lg:flex">
              {loginInfo?.loggedIn ? (
                <Link
                  to={ROUTES.account}
                  className="inline-flex items-center gap-2 px-2 py-1 text-sm text-white/60 font-display transition-colors hover:text-white/100"
                >
                  <div className="i-tabler-user" />
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to={ROUTES.login}
                    className="inline-block px-2 py-1 text-sm text-white/60 font-display transition-colors hover:text-white/100"
                  >
                    Login
                  </Link>
                  <Link
                    to={ROUTES.signup}
                    className="inline-block px-2 py-1 text-sm text-white/60 font-display transition-colors hover:text-white/100"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            <button
              className="ml-auto inline-block text-4xl text-white/75 lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <div className="i-tabler-menu-2" />
            </button>
          </div>
          <AnimatePresence>
            {/* Mobile navbar */}
            {menuOpen && (
              <m.div
                className="mx-auto overflow-hidden px-4 container lg:hidden"
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
              >
                <ul className="flex flex-col items-end pb-4 text-lg text-white/80 font-display">
                  {[
                    ...navLinks,
                    ...(loginInfo?.loggedIn
                      ? [{ text: 'Dashboard', to: ROUTES.account }]
                      : [
                          { text: 'Login', to: ROUTES.login },
                          { text: 'Register', to: ROUTES.signup },
                        ]),
                  ].map(({ text, to }) => (
                    <li key={to}>
                      <Link to={to} className="inline-block py-2">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </m.div>
            )}
          </AnimatePresence>
        </nav>
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
