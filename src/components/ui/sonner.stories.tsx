import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toaster } from './sonner';

const meta: Meta<typeof Toaster> = {
  title: 'ui/Toaster',
  component: Toaster,
};
export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  args: {},
};
