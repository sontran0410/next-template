import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
  title: 'ui/Calendar',
  component: Calendar,
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};
