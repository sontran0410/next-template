import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'ui/AspectRatio',
  component: AspectRatio,
};
export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {},
};
