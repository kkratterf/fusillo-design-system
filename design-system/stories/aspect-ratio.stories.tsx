// Import core
import { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
// Import customs
import { AspectRatio } from '@/components/aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      description:
        'Use the `ratio` prop to set the ratio between the width and the height of the component.',
      control: {
        type: 'number',
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays content within a desired ratio.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=164%3A294&mode=design&t=F5zgbD2phu8xvUpj-1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Ratio16x9: Story = {
  render: (args) => (
    <AspectRatio {...args}>
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded object-cover"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 16 / 9,
  },
};

export const Ratio4x3: Story = {
  render: (args) => (
    <AspectRatio {...args}>
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded object-cover"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 4 / 3,
  },
};

export const Ratio3x2: Story = {
  render: (args) => (
    <AspectRatio {...args}>
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded object-cover"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 3 / 2,
  },
};
