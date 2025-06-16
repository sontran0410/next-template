import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from './hover-card';

const meta: Meta<typeof HoverCard> = {
  title: 'ui/HoverCard',
  component: HoverCard,
};
export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  ),
};
