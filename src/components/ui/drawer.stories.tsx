import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Drawer } from './drawer';

const meta: Meta<typeof Drawer> = {
  title: 'ui/Drawer',
  component: Drawer,
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {},
};
