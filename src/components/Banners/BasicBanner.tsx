import { FaXmark } from 'react-icons/fa6'; // src/app/(components)/banner/Banner.tsx

import React, { FC } from 'react';

interface BannerProps {
  theme: 'light' | 'dark' | 'brand'; // Theme options for different backgrounds
  message: string; // The main text of the banner
  linkText?: string; // Optional text for the link
  linkHref?: string; // Optional href for the link
  showBackgroundGlow?: boolean; // Optional background glow effect
  onDismiss?: () => void; // Function to call when the dismiss button is clicked
  textAlign?: 'left' | 'center' | 'right'; // Optional text alignment
}

const BasicBanner: FC<BannerProps> = ({
  theme,
  message,
  linkText,
  linkHref,
  showBackgroundGlow = false,
  textAlign = 'center',
  onDismiss,
}) => {
  const themeClasses = {
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white',
    brand: 'bg-indigo-600 text-white',
  };

  const textAlignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const glowClasses = showBackgroundGlow
    ? 'relative isolate overflow-hidden'
    : '';

  return (
    <div
      className={`flex items-center gap-x-6 px-6 py-2.5 sm:px-3.5 ${themeClasses[theme]} ${glowClasses}`}
    >
      {showBackgroundGlow && (
        <>
          <div
            aria-hidden="true"
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
        </>
      )}
      <p
        className={`text-sm leading-6 flex items-center w-full ${textAlignClasses[textAlign]}`}
      >
        {message}
        {linkHref ? (
          <a
            href={linkHref}
            className="whitespace-nowrap font-semibold ml-2"
          >
            {linkText} <span aria-hidden="true">&rarr;</span>
          </a>
        ) : null}
      </p>
      <div className="flex flex-1 justify-end">
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <FaXmark
              aria-hidden="true"
              className="h-5 w-5 text-current"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default BasicBanner;
