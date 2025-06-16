import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Collapsible } from './collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'ui/Collapsible',
  component: Collapsible,
};
export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {},
};
