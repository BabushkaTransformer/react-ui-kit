import { useState } from 'react';
import { Button } from '../button/button.view';
import { Input } from '../input/input.view';
import { Paper } from '../paper';
import { Stack } from '../stack/stack.view';
import { Typography } from '../typography';
import { Popover } from './popover.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popover> = {
  title: 'Example/Popover',
  component: Popover,
  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
  argTypes: {
    portalRoot: { control: false },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

const PopoverTemplate = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack spacing={40}>
      <Popover
        placement="top-end"
        content={
          <Paper style={{ padding: 20 }}>
            <Typography variant="subtitle1">Тут текст</Typography>
            <Input />

            <Stack spacing={10} style={{ marginTop: 10 }}>
              <Button color="error">Cancel</Button>
              <Button color="success" onClick={() => setOpen(false)}>
                Save
              </Button>
            </Stack>
          </Paper>
        }
      >
        <Button>Click</Button>
      </Popover>

      <Popover
        action="hover"
        shown={open}
        placement="right-end"
        onShownChange={setOpen}
        content={
          <Paper style={{ padding: 10 }}>
            <Typography variant="subtitle1">При ховере</Typography>
          </Paper>
        }
      >
        <Button>Hover</Button>
      </Popover>
    </Stack>
  );
};

export const Standard: Story = {
  render: (props) => <PopoverTemplate {...props} />,
};
