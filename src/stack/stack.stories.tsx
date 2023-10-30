import { Button } from '../button/button.view';
import { Stack } from './stack.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stack> = {
  title: 'Example/Stack',
  component: Stack,

  argTypes: {
    component: {
      control: false,
    },
    children: {
      control: false,
    },
    divider: {
      control: false,
    },
    alignItems: {
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      control: { type: 'radio' },
    },
    justifyContent: {
      options: ['flex-start', 'flex-end', 'space-around', 'space-between', 'space-evenly', 'center'],
      control: { type: 'radio' },
    },
    direction: {
      options: ['row', 'column'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const children = [
  <Button key="1">one</Button>,
  <Button key="2">two</Button>,
  <Button key="3">three</Button>,
  <Button key="4">four</Button>,
];

export const Template: Story = {
  args: {
    spacing: '16px',
    children,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    divider: <div style={{ height: '10px', width: '2px', background: 'skyblue' }} />,
  },
};
