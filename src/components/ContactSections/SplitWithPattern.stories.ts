// SplitWithPattern.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import SplitWithPattern from './SplitWithPattern'; // Replace with the path to your component

// Meta configuration for Storybook
const meta: Meta<typeof SplitWithPattern> = {
  title: 'Sections/Contact/SplitWithPattern', // Set the appropriate path in the Storybook hierarchy
  component: SplitWithPattern,
  tags: ['autodocs'], // Tags for Storybook Docs
  parameters: {
    layout: 'fullscreen', // Adjust the layout if needed
  },
};

export default meta; // Export the meta configuration

type Story = StoryObj<typeof meta>;

// Define the first story, you can create multiple stories with different configurations
export const Default: Story = {
  args: {
    // Define the default props for the component
    // Replace 'propName' with the actual prop names and default values
    // Example:
    // propName1: 'Default Value',
    // propName2: 10,
  },
};
