import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Progress
} from './progress';

const meta: Meta<typeof Progress> = {
  title: 'ui/Progress',
  component: Progress,
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => (
    <Progress value={33} />
  ),
};
