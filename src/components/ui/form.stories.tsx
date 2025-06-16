import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useFormField } from './form';

const meta: Meta<typeof useFormField> = {
  title: 'ui/useFormField',
  component: useFormField,
};
export default meta;

type Story = StoryObj<typeof useFormField>;

export const Default: Story = {
  args: {},
};
