import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa';

// Define the interface for the navigation items
interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType; // Corrected type for icon component
}

// Define the interface for the component props
interface SocialBarFooterProps {
  navigation: NavigationItem[];
  copyrightText: string;
}

const SocialBarFooter: React.FC<SocialBarFooterProps> = ({
  navigation,
  copyrightText,
}) => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => {
            const IconComponent = item.icon; // Assign the icon to a variable
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
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SocialBarFooter;
