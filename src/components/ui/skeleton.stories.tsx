import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Skeleton
} from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'ui/Skeleton',
  component: Skeleton,
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
  ),
};
