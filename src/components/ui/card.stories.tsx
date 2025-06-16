import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'ui/Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};
