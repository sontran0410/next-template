import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Textarea
} from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'ui/Textarea',
  component: Textarea,
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => (
    <Textarea />
  ),
};
