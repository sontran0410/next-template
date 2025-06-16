import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { type } from './carousel';

const meta: Meta<typeof type> = {
  title: 'ui/type',
  component: type,
};
export default meta;

type Story = StoryObj<typeof type>;

export const Default: Story = {
  args: {},
};
