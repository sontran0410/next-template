import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'ui/Tabs',
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};
