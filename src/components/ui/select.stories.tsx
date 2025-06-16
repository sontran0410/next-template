import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'ui/Select',
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};
