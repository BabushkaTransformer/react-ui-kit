import { Paper } from '../paper/paper.view';
import { RadioProps } from './radio.models';
import { Radio } from './radio.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  title: 'Example/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

const RadioTemplate = (props: RadioProps) => (
  <Paper style={{ padding: 32, display: 'flex', gap: 12 }}>
    <Radio {...props} name="1" defaultChecked />

    <Radio {...props} name="2">
      I am enabled
    </Radio>

    <Radio {...props} name="3" disabled defaultChecked />

    <Radio {...props} name="4" disabled>
      I am disabled
    </Radio>
  </Paper>
);

export const Template: Story = {
  render: (props) => <RadioTemplate {...props} />,
};
