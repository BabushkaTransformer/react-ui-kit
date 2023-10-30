import { renderWithTheme } from '../utils/test/renderWithTheme';
import '@testing-library/jest-dom';
import { Stack } from './stack.view';

describe('Stack component', () => {
  it('renders children without errors', () => {
    const { getByText } = renderWithTheme(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });

  it('renders children with a divider', () => {
    const { getByText, getByTestId } = renderWithTheme(
      <Stack divider={<hr data-testid="divider" />}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByTestId('divider')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });

  it('applies custom flex properties', () => {
    const { container } = renderWithTheme(
      <Stack direction="row" justifyContent="center" alignItems="center">
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );

    const stackContainer = container.firstChild;
    expect(stackContainer).toHaveStyle('flex-direction: row;');
    expect(stackContainer).toHaveStyle('justify-content: center;');
    expect(stackContainer).toHaveStyle('align-items: center;');
  });
});
