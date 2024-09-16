import { AnimatePresence, m } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  HOME_LOGO_IMAGE,
  LOGO_TEXT,
  USE_LOGO_IMAGE,
} from '../../constants/branding';
import {
  INFRASTRUCTURE_URL,
  BARE_METAL_URL,
} from '../../constants/external';
import { ROUTES } from '../../constants/pages';
import useAuth from '../../hooks/use-auth';

const navLinks = [
  { text: 'Virtual Machines', to: ROUTES.deployForm },
  { text: 'Bare Metal', to: BARE_METAL_URL },
];

export default function Navigation({ scrolledBelowSplash }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginInfo } = useAuth();

  return (
    <nav
      className={`fixed top-0 z-1 w-full transition-all duration-300 ${
        scrolledBelowSplash ? 'bg-primary-950 shadow-lg' : 'bg-primary-950/0'
      } ${
        menuOpen && !scrolledBelowSplash
          ? 'lg:bg-primary-950/0 max-lg:bg-primary-950'
          : ''
      }`}
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
  );
}