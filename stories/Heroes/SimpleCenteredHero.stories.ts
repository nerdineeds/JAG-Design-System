// SimpleCenteredHero.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import SimpleCenteredHero from './SimpleCenteredHero';

const meta: Meta<typeof SimpleCenteredHero> = {
  title: 'Heroes/SimpleCenteredHero',
  component: SimpleCenteredHero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Fullscreen layout for better visualization
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story: Books Open
export const BooksOpen: Story = {
  args: {
    title: 'Welcome to Our Creative Agency',
    description:
      'We provide a wide range of services to help you achieve your digital goals. Let’s create something amazing together.',
    booksOpen: true, // Books are open
    season: 'Fall', // Current business season
    year: new Date().getFullYear(), // Current year dynamically
    primaryAction: { text: 'Get started', href: '#' },
    secondaryAction: { text: 'Learn more', href: '#' },
  },
};

// Story: Books Closed
export const BooksClosed: Story = {
  args: {
    title: 'Welcome to Our Creative Agency',
    description:
      'We provide a wide range of services to help you achieve your digital goals. Let’s create something amazing together.',
    booksOpen: false, // Books are closed
    season: 'Winter', // Current business season
    year: new Date().getFullYear(), // Current year dynamically
    primaryAction: { text: 'Get started', href: '#' },
    secondaryAction: { text: 'Learn more', href: '#' },
  },
};

export const BooksOpenWithNoButtons: Story = {
  args: {
    title: 'Welcome to Our Creative Agency',
    description:
      'We provide a wide range of services to help you achieve your digital goals. Let’s create something amazing together.',
    booksOpen: true, // Books are open
    season: 'Fall', // Current business season
    year: new Date().getFullYear(), // Current year dynamically
  },
};
