import { Paper } from './paper.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Paper> = {
  title: 'Example/Paper',
  component: Paper,
  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
  argTypes: {
    variant: {
      options: ['default', 'outlined'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Standard: Story = {
  render: (props) => (
    <Paper style={{ padding: 20 }} {...props}>
      This is paper
    </Paper>
  ),
};
