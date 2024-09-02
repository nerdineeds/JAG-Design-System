import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa';

// Define the interface for the navigation items
interface NavigationLink {
  name: string;
  href: string;
}

// Define the interface for the social links
interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType; // Correct type for icon component
}

// Define the interface for the component props
interface SimpleCenteredFooterProps {
  mainLinks: NavigationLink[];
  socialLinks: SocialLink[];
  copyrightText: string;
}

const SimpleCenteredFooter: React.FC<SimpleCenteredFooterProps> = ({
  mainLinks,
  socialLinks,
  copyrightText,
}) => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        >
          {mainLinks.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {socialLinks.map((item) => {
            const IconComponent = item.icon; // Use variable for icon component
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security measure for external links
              >
                <span className="sr-only">{item.name}</span>
                <IconComponent
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </a>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default SimpleCenteredFooter;
