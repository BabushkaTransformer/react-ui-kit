import { Chip } from './chip.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
  title: 'Example/Chip',
  component: Chip,
  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
  argTypes: {
    component: {
      table: { disable: true },
    },
    endIcon: {
      table: { disable: true },
    },
    startIcon: {
      table: { disable: true },
    },
    size: {
      options: ['default', 'small'],
      control: { type: 'radio' },
    },
    label: {
      description: 'Label of chip',
    },
    color: {
      description: 'Color of chip',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Standard: Story = {
  args: {
    label: 'Standard',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
  },
};

export const Rounded: Story = {
  args: {
    label: 'Rounded',
    color: 'warning',
    rounded: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    color: 'info',
    size: 'small',
  },
};
