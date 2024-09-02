import React from 'react';

// Define the interface for the props
interface CenterHeaderProps {
  title: string;
  description: string;
  booksOpen: boolean; // Prop to check if books are open
  season: string; // Prop to indicate the current business season
  year: number; // Prop to indicate the current year
}

const CenterHeader: React.FC<CenterHeaderProps> = ({
  title,
  description,
  booksOpen,
  season,
  year,
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
      </div>
    </div>
  );
};

export default CenterHeader;
