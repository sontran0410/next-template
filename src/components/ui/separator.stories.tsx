import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Separator
} from './separator';

const meta: Meta<typeof Separator> = {
  title: 'ui/Separator',
  component: Separator,
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <Separator />
  ),
};
