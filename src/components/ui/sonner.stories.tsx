import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toast } from "./sonner";

const meta: Meta<typeof Toast> = {
  title: "ui/toast",
  component: toast,
};
export default meta;

type Story = StoryObj<typeof toast>;

export const Default: Story = {
  render: () => toast("Event has been created."),
};
