import { useState } from 'react';
import { SelectOption } from './select.models';
import { Select } from './select.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectTemplate = () => {
  const users = [
    {
      label: 'Первый',
      value: 1,
      description: 'user',
    },
    {
      label: 'Второй',
      value: 2,
      description: 'user2',
    },
    {
      label: '3',
      value: 3,
      description: 'user',
    },
    {
      label: '4',
      value: 4,
      description: 'user2',
    },
    {
      label: '5',
      value: 5,
      description: 'user',
    },
    {
      label: '6',
      value: 6,
      description: 'user2',
    },
    {
      label: '7',
      value: 7,
      description: 'user',
    },
    {
      label: '8',
      value: 8,
      description: 'user2',
    },
  ];

  const [selectType, setSelectType] = useState<SelectOption | undefined>(undefined);

  return <Select value={selectType} searchable placeholder="Не задан" options={users} onChange={setSelectType} />;
};

export const Standard: Story = {
  render: () => <SelectTemplate />,
};
