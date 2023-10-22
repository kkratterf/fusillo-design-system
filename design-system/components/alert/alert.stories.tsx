import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Alert> = {
  title: 'Design System/Components/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    controls: {
      exclude: ['theme'],
    },
    docs: {
      description: {
        component: 'Displays a callout for user attention.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {
    title: 'Button',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
  args: {
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cool description bro',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cool description bro',
      },
    },
  },
};
