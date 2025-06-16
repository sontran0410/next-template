import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Accordion } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'ui/Accordion',
  component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {},
};
