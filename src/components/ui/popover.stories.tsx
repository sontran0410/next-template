import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from './popover';

const meta: Meta<typeof Popover> = {
  title: 'ui/Popover',
  component: Popover,
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  ),
};
