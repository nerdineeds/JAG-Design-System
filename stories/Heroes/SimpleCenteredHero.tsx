'use client';

import React from 'react';

// Define the interface for the props
interface SimpleCenteredHeroProps {
  title: string;
  description: string;
  booksOpen: boolean; // Prop to check if books are open
  season: string; // Prop to indicate the current business season
  year: number; // Prop to indicate the current year
  primaryAction?: { text: string; href: string }; // Optional button for primary action
  secondaryAction?: { text: string; href: string }; // Optional button for secondary action
}

const SimpleCenteredHero: React.FC<SimpleCenteredHeroProps> = ({
  title,
  description,
  booksOpen,
  season,
  year,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          {booksOpen
            ? `Our Books are Open for ${season} '${year}. Join Us for Your Next Project.`
            : 'Our Books Are Currently Closed. Join Our Waitlist for the Next Season!'}
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
        {/* Conditionally render buttons if actions are provided */}
        {(primaryAction || secondaryAction) && (
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {primaryAction && (
              <a
                href={primaryAction.href}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {primaryAction.text}
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {secondaryAction.text}{' '}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleCenteredHero;
