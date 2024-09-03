// src/stories/BasicBanner.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import BasicBanner from './BasicBanner';

// Meta configuration for Storybook
const meta: Meta<typeof BasicBanner> = {
  title: 'Elements/Banners/BasicBanner',
  component: BasicBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default light-themed BasicBanner
export const Light: Story = {
  args: {
    theme: 'light',
    message:
      'Join us in Denver from June 7 – 9 to see what’s coming next.',
    linkText: 'GeneriCon 2023',
    linkHref: '#',
    onDismiss: () => alert('BasicBanner dismissed!'),
  },
};

// Dark-themed BasicBanner
export const Dark: Story = {
  args: {
    theme: 'dark',
    message:
      'Join us in Denver from June 7 – 9 to see what’s coming next.',
    linkText: 'GeneriCon 2023',
    linkHref: '#',
    onDismiss: () => alert('BasicBanner dismissed!'),
  },
};

// Brand-themed BasicBanner
export const Brand: Story = {
  args: {
    theme: 'brand',
    message:
      'Join us in Denver from June 7 – 9 to see what’s coming next.',
    linkText: 'GeneriCon 2023',
    linkHref: '#',
    onDismiss: () => alert('BasicBanner dismissed!'),
  },
};

// BasicBanner with background glow effect
export const WithGlow: Story = {
  args: {
    theme: 'light',
    message:
      'Join us in Denver from June 7 – 9 to see what’s coming next.',
    linkText: 'GeneriCon 2023',
    linkHref: '#',
    showBackgroundGlow: true,
    onDismiss: () => alert('BasicBanner dismissed!'),
  },
};

// BasicBanner with an inline link
export const WithLink: Story = {
  args: {
    theme: 'light',
    message: 'GeneriCon 2023 is on June 7 – 9 in Denver.',
    linkText: 'Get your ticket',
    linkHref: '#',
    onDismiss: () => alert('BasicBanner dismissed!'),
  },
};
