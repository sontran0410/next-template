import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Menubar } from './menubar';

const meta: Meta<typeof Menubar> = {
  title: 'ui/Menubar',
  component: Menubar,
};
export default meta;

type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  args: {},
};
