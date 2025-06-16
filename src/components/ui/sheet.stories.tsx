import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Sheet } from './sheet';

const meta: Meta<typeof Sheet> = {
  title: 'ui/Sheet',
  component: Sheet,
};
export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {},
};
