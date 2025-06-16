import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ScrollArea } from './scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'ui/ScrollArea',
  component: ScrollArea,
};
export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  args: {},
};
