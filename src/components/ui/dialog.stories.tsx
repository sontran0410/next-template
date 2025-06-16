import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Dialog } from './dialog';

const meta: Meta<typeof Dialog> = {
  title: 'ui/Dialog',
  component: Dialog,
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {},
};
