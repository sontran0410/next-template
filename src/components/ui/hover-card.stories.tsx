import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HoverCard } from './hover-card';

const meta: Meta<typeof HoverCard> = {
  title: 'ui/HoverCard',
  component: HoverCard,
};
export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {},
};
