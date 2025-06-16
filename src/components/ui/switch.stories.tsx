import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'ui/Switch',
  component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};
