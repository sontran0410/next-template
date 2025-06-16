import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Command } from './command';

const meta: Meta<typeof Command> = {
  title: 'ui/Command',
  component: Command,
};
export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
  args: {},
};
