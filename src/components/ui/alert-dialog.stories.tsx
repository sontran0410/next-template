import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AlertDialog } from './alert-dialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'ui/AlertDialog',
  component: AlertDialog,
};
export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {},
};
