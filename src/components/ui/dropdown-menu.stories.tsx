import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DropdownMenu } from './dropdown-menu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'ui/DropdownMenu',
  component: DropdownMenu,
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {},
};
