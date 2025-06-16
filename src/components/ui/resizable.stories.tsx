import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from './resizable';

const meta: Meta<typeof ResizableHandle> = {
  title: 'ui/ResizableHandle',
  component: ResizableHandle,
};
export default meta;

type Story = StoryObj<typeof ResizableHandle>;

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  ),
};
