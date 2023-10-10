import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithTheme } from '../utils/test/renderWithTheme';
import { Input } from './input.view';

describe('Input component', () => {
  it('renders with default props', () => {
    renderWithTheme(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders with start and end adornments', () => {
    const startAdornment = <span>Start</span>;
    const endAdornment = <span>End</span>;
    renderWithTheme(<Input startAdornment={startAdornment} endAdornment={endAdornment} />);
    const startAdornmentElement = screen.getByText('Start');
    const endAdornmentElement = screen.getByText('End');
    expect(startAdornmentElement).toBeInTheDocument();
    expect(endAdornmentElement).toBeInTheDocument();
  });

  it('changes value on user input', () => {
    renderWithTheme(<Input />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(inputElement).toHaveValue('New Value');
  });

  it('calls onChange callback', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
