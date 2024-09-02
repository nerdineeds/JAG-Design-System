'use client';

import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Define a type for navigation items
type NavigationItem = {
  name: string;
  href: string;
};

// Define a type for the CTA button or link
interface Cta {
  type: 'button' | 'link';
  text: string;
  href: string;
}

// Define props for the Navbar component
interface NavbarProps {
  navigation: NavigationItem[];
  logoSrc: string;
  logoAlt?: string;
  logoHref?: string;
  loginHref?: string;
  theme?: 'light' | 'dark'; // New theme prop for light or dark mode
  cta?: Cta; // New CTA prop for either a button or a link
}

const Navbar: React.FC<NavbarProps> = ({
  navigation = [], // Default value to avoid undefined error
  logoSrc,
  logoAlt = 'Your Company',
  logoHref = '#',
  loginHref = '#',
  theme = 'light',
  cta,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState<boolean>(false);

  // Conditional classes for light and dark themes
  const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const hoverBgClass =
    theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50';
  const hoverTextClass =
    theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-700';

  return (
    <header className={`${bgClass}`}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href={logoHref} className="-m-1.5 p-1.5">
            <span className="sr-only">{logoAlt}</span>
            <img alt={logoAlt} src={logoSrc} className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${textClass}`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${textClass} ${hoverTextClass}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {cta ? (
            cta.type === 'button' ? (
              <a
                href={cta.href}
                className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {cta.text}
              </a>
            ) : (
              <a
                href={cta.href}
                className={`text-sm font-semibold leading-6 ${textClass}`}
              >
                {cta.text} <span aria-hidden="true">&rarr;</span>
              </a>
            )
          ) : (
            <a
              href={loginHref}
              className={`text-sm font-semibold leading-6 ${textClass}`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto ${bgClass} px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <a href={logoHref} className="-m-1.5 p-1.5">
              <span className="sr-only">{logoAlt}</span>
              <img
                alt={logoAlt}
                src={logoSrc}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={`-m-2.5 rounded-md p-2.5 ${textClass}`}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${textClass} ${hoverBgClass}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {cta ? (
                  cta.type === 'button' ? (
                    <a
                      href={cta.href}
                      className="block rounded-lg bg-indigo-600 px-3 py-2.5 text-base font-semibold leading-7 text-white text-center shadow-sm hover:bg-indigo-500"
                    >
                      {cta.text}
                    </a>
                  ) : (
                    <a
                      href={cta.href}
                      className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${textClass} ${hoverBgClass}`}
                    >
                      {cta.text}
                    </a>
                  )
                ) : (
                  <a
                    href={loginHref}
                    className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${textClass} ${hoverBgClass}`}
                  >
                    Log in
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
