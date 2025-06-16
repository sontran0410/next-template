import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NavigationMenu } from './navigation-menu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'ui/NavigationMenu',
  component: NavigationMenu,
};
export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  args: {},
};
