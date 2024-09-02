// Navbar.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar'; // Ensure the correct import path

// Define meta information for Storybook
const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar', // Storybook category and name
  component: Navbar, // Correctly specify the component here
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta; // Make sure to export the meta object

type Story = StoryObj<typeof meta>;

// Story: Light theme with link CTA
export const LightThemeWithLinkCTA: Story = {
  args: {
    logoSrc:
      'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    navigation: [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ],
    loginHref: '#',
    theme: 'light',
    cta: { type: 'link', text: 'Contact Us', href: '#' },
  },
};

// Story: Dark theme with button CTA
export const DarkThemeWithButtonCTA: Story = {
  args: {
    logoSrc:
      'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    navigation: [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ],
    loginHref: '#',
    theme: 'dark',
    cta: { type: 'button', text: 'Get Started', href: '#' },
  },
};

// Story: Default Navbar without CTA
export const DefaultNavbar: Story = {
  args: {
    logoSrc:
      'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    navigation: [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ],
    loginHref: '#',
  },
};
