import { Button } from './button.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
  argTypes: {
    component: {
      control: false,
    },
    endIcon: {
      control: false,
    },
    startIcon: {
      control: false,
    },
    size: {
      options: ['none', 'small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    color: {
      description: 'Color of chip',
    },
    disabled: {
      type: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Standard: Story = {
  args: {
    children: 'Standard',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined',
  },
};

export const Small: Story = {
  args: {
    color: 'info',
    children: 'Small',
    size: 'small',
  },
};
