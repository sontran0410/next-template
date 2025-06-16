import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Table } from './table';

const meta: Meta<typeof Table> = {
  title: 'ui/Table',
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {},
};
