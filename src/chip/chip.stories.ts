import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './chip.view.tsx';

const meta: Meta<typeof Chip> = {
  title: 'Example/Chip',
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const FirstStory: Story = {
  args: {},
};