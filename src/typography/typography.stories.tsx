import { Meta, StoryObj } from '@storybook/react';
import { TypographyProps } from './typography.models';
import { Typography } from './typography.view';

const meta: Meta<typeof Typography> = {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'gray'],
      control: { type: 'radio' },
    },
    align: {
      options: ['default', 'center'],
      control: { type: 'radio' },
    },
    fontWeight: {},
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

const arr: Array<Required<Pick<TypographyProps, 'variant'>>> = [
  { variant: 'h1' },
  { variant: 'h2' },
  { variant: 'h3' },
  { variant: 'h4' },
  { variant: 'h5' },
  { variant: 'h6' },
  { variant: 'subtitle1' },
  { variant: 'body1' },
  { variant: 'label' },
];

const TypographyList = () => (
  <>
    {arr.map((props) => (
      <Typography variant={props.variant} key={props.variant} style={{ backgroundColor: '#fafafa', marginBottom: 8 }}>
        {props.variant.toUpperCase()}
      </Typography>
    ))}
  </>
);

export const Standard: Story = {
  render: (props) => <TypographyList {...props} />,
};

export const PlayGround: Story = {
  args: {
    color: 'primary',
    children: 'Small',
    fontWeight: 400,
  },
};
