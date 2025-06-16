import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  ToggleGroup,
  ToggleGroupItem
} from './toggle-group';

const meta: Meta<typeof ToggleGroup> = {
  title: 'ui/ToggleGroup',
  component: ToggleGroup,
};
export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  ),
};
