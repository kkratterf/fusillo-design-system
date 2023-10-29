import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    controls: {
      exclude: ['theme'],
    },
    docs: {
      description: {
        component:
          'Triggers an event or action. They let users know what will happen next.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
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
    variant: 'danger',
    size: 'default',
    asChild: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
  args: {
    variant: 'default',
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cool description bro',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cool description bro',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cool description bro',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cool description bro',
      },
    },
  },
};