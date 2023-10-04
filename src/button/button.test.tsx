import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '../test/renderWithTheme';
import { IButtonProps } from './button.models';
import { Button } from './button.view';

const ButtonTest = (props: IButtonProps) => <Button data-testid="custom-btn" {...props} />;

const button = () => screen.getByTestId('custom-btn');

describe('Button', () => {
  it('Component: Button is handled as a native button', () => {
    renderWithTheme(<ButtonTest>Native Button</ButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('button');
  });

  it('Component: Button with loading is not clickable', () => {
    const handleClick = jest.fn();
    renderWithTheme(
      <ButtonTest onClick={handleClick} loading>
        Button
      </ButtonTest>
    );

    fireEvent.click(button());
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
