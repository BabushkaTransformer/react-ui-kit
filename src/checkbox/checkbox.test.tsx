import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../utils/test/renderWithTheme';
import { Checkbox } from './checkbox.view';
import '@testing-library/jest-dom';

describe('Checkbox', () => {
  it('displays text and icon', () => {
    renderWithTheme(
      <Checkbox defaultChecked checkIcon={<div data-testid="check-icon">✓</div>}>
        Checkbox Label
      </Checkbox>
    );

    const label = screen.getByText('Checkbox Label');
    const checkIcon = screen.getByTestId('check-icon');

    expect(label).toBeInTheDocument();
    expect(checkIcon).toBeInTheDocument();
  });

  it('can be disabled', async () => {
    const onChange = jest.fn();
    renderWithTheme(<Checkbox onChange={onChange} disabled />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(checkbox).toBeDisabled();
  });

  it('calls a handler on click', async () => {
    const onChange = jest.fn();
    renderWithTheme(<Checkbox onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox).not.toBeChecked();
  });

  it('can be selected', () => {
    renderWithTheme(<Checkbox defaultChecked>Checkbox Label</Checkbox>);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });
});
