import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'ui/Alert',
  component: Alert,
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {},
};
