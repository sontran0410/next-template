import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ToggleGroup } from './toggle-group';

const meta: Meta<typeof ToggleGroup> = {
  title: 'ui/ToggleGroup',
  component: ToggleGroup,
};
export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  args: {},
};
