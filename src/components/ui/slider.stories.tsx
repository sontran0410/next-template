import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Slider
} from './slider';

const meta: Meta<typeof Slider> = {
  title: 'ui/Slider',
  component: Slider,
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <Slider defaultValue={[33]} max={100} step={1} />
  ),
};
