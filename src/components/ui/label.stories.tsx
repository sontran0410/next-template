import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'ui/Label',
  component: Label,
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {},
};
