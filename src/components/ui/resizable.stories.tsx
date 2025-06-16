import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ResizablePanelGroup } from './resizable';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'ui/ResizablePanelGroup',
  component: ResizablePanelGroup,
};
export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  args: {},
};
