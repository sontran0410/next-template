import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'ui/Tooltip',
  component: Tooltip,
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {},
};
