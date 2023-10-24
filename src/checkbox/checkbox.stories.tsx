import { useState } from 'react';
import { MinusIcon } from '../icons/minus';
import { Paper } from '../paper/paper.view';
import { Checkbox } from './checkbox.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const CheckboxTemplate = () => {
  const [value, setValue] = useState(true);

  return (
    <Paper style={{ width: '300px', padding: 32, display: 'flex', gap: 12 }}>
      <Checkbox checked={value} onChange={(e): void => setValue(e.target.checked)} />

      <Checkbox checked={!value} onChange={(e): void => setValue(!e.target.checked)} />

      <Checkbox checked disabled>
        I am disabled
      </Checkbox>
    </Paper>
  );
};

export const Template: Story = {
  render: () => <CheckboxTemplate />,
};

export const WithIcon: Story = {
  args: {
    checkIcon: <MinusIcon />,
    children: 'Checkbox with custom icon',
  },
};
