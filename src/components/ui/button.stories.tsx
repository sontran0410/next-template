import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Button
} from './button';

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => (
    <Button variant="outline">Button</Button>
  ),
};
