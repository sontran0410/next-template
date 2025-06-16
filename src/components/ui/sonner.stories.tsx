import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  toast
} from './sonner';

const meta: Meta<typeof toast> = {
  title: 'ui/toast',
  component: toast,
};
export default meta;

type Story = StoryObj<typeof toast>;

export const Default: Story = {
  render: () => (
    toast("Event has been created.")
  ),
};
