import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Sidebar } from './sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'ui/Sidebar',
  component: Sidebar,
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {},
};
