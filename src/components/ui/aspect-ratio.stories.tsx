import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AspectRatio } from './aspect-ratio';
import Image from 'next/image';

const meta: Meta<typeof AspectRatio> = {
  title: 'ui/AspectRatio',
  component: AspectRatio,
};
export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Image src="..." alt="Image" className="rounded-md object-cover" />
      </AspectRatio>
    </div>
  ),
};
