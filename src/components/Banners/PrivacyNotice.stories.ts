// src/stories/PrivacyNotice.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import PrivacyNotice from './PrivacyNotice';

// Meta configuration for Storybook
const meta: Meta<typeof PrivacyNotice> = {
  title: 'Elements/Banners/PrivacyNotice',
  component: PrivacyNotice,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Right-aligned privacy notice
export const RightAligned: Story = {
  args: {
    alignment: 'right',
    message:
      'This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious. See our',
    policyLinkText: 'cookie policy',
    policyLinkHref: '#',
    onAccept: () => alert('Cookies accepted!'),
    onReject: () => alert('Cookies rejected!'),
  },
};

// Centered privacy notice
export const Centered: Story = {
  args: {
    alignment: 'center',
    message:
      'This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious. See our',
    policyLinkText: 'cookie policy',
    policyLinkHref: '#',
    onAccept: () => alert('Cookies accepted!'),
    onReject: () => alert('Cookies rejected!'),
  },
};

// Left-aligned privacy notice
export const LeftAligned: Story = {
  args: {
    alignment: 'left',
    message:
      'This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious. See our',
    policyLinkText: 'cookie policy',
    policyLinkHref: '#',
    onAccept: () => alert('Cookies accepted!'),
    onReject: () => alert('Cookies rejected!'),
  },
};

// Full-width privacy notice
export const FullWidth: Story = {
  args: {
    alignment: 'full',
    message:
      'This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious. See our',
    policyLinkText: 'cookie policy',
    policyLinkHref: '#',
    onAccept: () => alert('Cookies accepted!'),
    onReject: () => alert('Cookies rejected!'),
  },
};
