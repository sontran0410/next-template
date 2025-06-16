import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'ui/Tabs',
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
};
