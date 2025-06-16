import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'ui/Toggle',
  component: Toggle,
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};
