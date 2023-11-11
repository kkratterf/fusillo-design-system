// Import core
import type { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Button } from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Button',
    variant: 'danger',
    asChild: false,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Triggers an event or action. They let users know what will happen next.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=119%3A6&mode=design&t=MpDMELWReoDbdLIS-1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: 'primary',
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Cool description bro',
      },
    },
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cool description bro',
      },
    },
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Cool description bro',
      },
    },
  },
};
