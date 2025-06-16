import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ContextMenu } from './context-menu';

const meta: Meta<typeof ContextMenu> = {
  title: 'ui/ContextMenu',
  component: ContextMenu,
};
export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {},
};
