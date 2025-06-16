import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ChartContainer } from './chart';

const meta: Meta<typeof ChartContainer> = {
  title: 'ui/ChartContainer',
  component: ChartContainer,
};
export default meta;

type Story = StoryObj<typeof ChartContainer>;

export const Default: Story = {
  args: {},
};
