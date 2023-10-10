import { Input } from './input.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
  argTypes: {
    startAdornment: { control: false },
    endAdornment: { control: false },
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
    value: {
      description: 'Состояние инпута.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Standard: Story = {
  args: {
    placeholder: 'Standard',
  },
};
