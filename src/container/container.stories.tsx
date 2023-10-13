import { Paper } from '../paper/paper.view';
import { Container } from './container.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Container> = {
  title: 'Example/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Xs: Story = {
  render: () => (
    <Container maxWidth="xs">
      <Paper style={{ padding: 32 }} variant="outlined" />
    </Container>
  ),
};

export const Sm: Story = {
  render: () => (
    <Container maxWidth="sm">
      <Paper style={{ padding: 32 }} variant="outlined" />
    </Container>
  ),
};

export const Md: Story = {
  render: () => (
    <Container maxWidth="md">
      <Paper style={{ padding: 32 }} variant="outlined" />
    </Container>
  ),
};

export const Lg: Story = {
  render: () => (
    <Container maxWidth="lg">
      <Paper style={{ padding: 32 }} variant="outlined" />
    </Container>
  ),
};

export const Xl: Story = {
  render: () => (
    <Container maxWidth="xl">
      <Paper style={{ padding: 32 }} variant="outlined" />
    </Container>
  ),
};
