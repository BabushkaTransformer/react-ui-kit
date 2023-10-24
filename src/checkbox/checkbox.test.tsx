import { useState } from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../utils/test/renderWithTheme';
import { CheckboxProps } from './checkbox.models';
import { Checkbox } from './checkbox.view';
import '@testing-library/jest-dom';

const CheckboxController = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} {...props} />;
};

describe('Checkbox', () => {
  it('displays text and icon', () => {
    renderWithTheme(
      <CheckboxController checked checkIcon={<div data-testid="check-icon">✓</div>}>
        Checkbox Label
      </CheckboxController>
    );

    const label = screen.getByText('Checkbox Label');
    const checkIcon = screen.getByTestId('check-icon');

    expect(label).toBeInTheDocument();
    expect(checkIcon).toBeInTheDocument();
  });

  it('can be disabled', async () => {
    const onChange = jest.fn();
    renderWithTheme(<CheckboxController onChange={onChange} disabled />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(checkbox).toBeDisabled();
  });

  it('calls a handler on click', async () => {
    const onChange = jest.fn();
    renderWithTheme(<input type="checkbox" onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox).not.toBeChecked();
  });

  it('can be selected', () => {
    renderWithTheme(<CheckboxController checked>Checkbox Label</CheckboxController>);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });
});
