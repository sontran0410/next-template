import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { InputOTP } from './input-otp';

const meta: Meta<typeof InputOTP> = {
  title: 'ui/InputOTP',
  component: InputOTP,
};
export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  args: {},
};
