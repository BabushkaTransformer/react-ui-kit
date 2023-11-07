import { useState, useRef } from 'react';
import { Button } from '../button/button.view';
import { PopperProps } from './popper.models';
import { Popper } from './popper.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popper> = {
  title: 'Example/Popper',
  component: Popper,
  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
  argTypes: {
    portalRoot: { control: false },
    targetRef: { control: false },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popper>;

const PopperTemplate = (props: PopperProps) => {
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => setShow(!show);

  return (
    <>
      <div style={{ position: 'relative', width: 'fit-content', padding: 100, height: '200vh' }}>
        <Button ref={ref} variant="contained" onClick={handleClick}>
          Open Popover
        </Button>
      </div>

      {show && (
        <Popper {...props} targetRef={ref}>
          тут контенттут контенттут контенттут контенттут контенттут контенттут контенттут контент тут контенттут
          контенттут контенттут контенттут контенттут контенттут контенттут контенттут контент тут контенттут контенттут
          контенттут контенттут контенттут контенттут контенттут контенттут ко
        </Popper>
      )}
    </>
  );
};

export const Standard: Story = {
  render: (props) => <PopperTemplate {...props} />,
  args: {
    offsetDistance: 20,
    offsetSkidding: 10,
  },
};
