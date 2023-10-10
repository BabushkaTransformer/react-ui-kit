import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithTheme } from '../utils/test/renderWithTheme';
import { Chip } from './chip.view';

describe('Chip component', () => {
  it('renders label', () => {
    const label = 'Test Chip';
    renderWithTheme(<Chip label={label} />);
    const chipElement = screen.getByText(label);
    expect(chipElement).toBeInTheDocument();
  });

  it('renders startIcon', () => {
    const label = 'Test Chip';
    const startIcon = <span>Start Icon</span>;
    renderWithTheme(<Chip label={label} startIcon={startIcon} />);
    const startIconElement = screen.getByText('Start Icon');
    expect(startIconElement).toBeInTheDocument();
  });

  it('renders endIcon', () => {
    const label = 'Test Chip';
    const endIcon = <span>End Icon</span>;
    renderWithTheme(<Chip label={label} endIcon={endIcon} />);
    const endIconElement = screen.getByText('End Icon');
    expect(endIconElement).toBeInTheDocument();
  });

  it('applies custom class', () => {
    const label = 'Test Chip';
    const className = 'custom-chip';
    renderWithTheme(<Chip label={label} className={className} />);
    const chipElement = screen.getByText(label);
    expect(chipElement).toHaveClass(className);
  });

  it('applies custom component', () => {
    const { container } = renderWithTheme(<Chip label="Test Chip" component="li" />);
    const parentElement = container.firstElementChild;
    expect(parentElement?.tagName).toMatch('LI');
  });
});
