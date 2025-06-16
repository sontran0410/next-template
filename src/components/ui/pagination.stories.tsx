import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'ui/Pagination',
  component: Pagination,
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {},
};
