import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../utils/test/renderWithTheme';
import '@testing-library/jest-dom';
import { Radio } from './radio.view';

describe('Radio', () => {
  it('displays text and icon', () => {
    renderWithTheme(<Radio defaultChecked>Radio Label</Radio>);

    const label = screen.getByText('Radio Label');

    expect(label).toBeInTheDocument();
  });

  it('can be disabled', async () => {
    const onChange = jest.fn();
    renderWithTheme(<Radio onChange={onChange} disabled />);

    const radio = screen.getByRole('radio');
    await userEvent.click(radio);

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(radio).toBeDisabled();
  });

  it('calls a handler on click', async () => {
    const onChange = jest.fn();
    renderWithTheme(<Radio onChange={onChange} />);

    const radio = screen.getByRole('radio');
    await userEvent.click(radio);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(radio).toBeChecked();
  });
});
