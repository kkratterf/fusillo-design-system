// Import core
import type { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Button } from './';
import { Download, Search } from 'lucide-react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Use the `title`prop to specify the text label displayed on the button.',
      table: {
        type: { summary: null },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text', 'link', 'danger'],
      description:
        'Use the `variant` prop to define the priority of the button',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: null },
      },
    },
    icon: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
  args: {
    title: 'Button',
    variant: 'primary',
    icon: false,
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
  args: {
    title: 'Primary',
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
    title: 'Secondary',
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
    title: 'Text',
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
    title: 'Link',
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
    title: 'Danger',
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

export const WithIcon: Story = {
  render: (args) => (
    <Button variant={args.variant}>
      <Download />
      Download
    </Button>
  ),
  args: {
    variant: 'primary',
  },
  argTypes: {
    title: { table: { disable: true } },
  },
};

export const Icon: Story = {
  render: (args) => (
    <Button {...args} icon={true}>
      <Search />
    </Button>
  ),
  args: {
    title: undefined,
    variant: 'secondary',
  },
  argTypes: {
    title: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: 'Set the `icon` prop to `true` to display an icon button',
      },
    },
  },
};