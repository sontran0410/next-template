import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Popover } from './popover';

const meta: Meta<typeof Popover> = {
  title: 'ui/Popover',
  component: Popover,
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {},
};
