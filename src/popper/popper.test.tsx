import { useRef, useState } from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button/button.view';
import { renderWithTheme } from '../utils/test/renderWithTheme';
import { Popper } from './popper.view';
import '@testing-library/jest-dom';

const PopperTemplate = () => {
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

      {show && <Popper targetRef={ref}>popper content</Popper>}
    </>
  );
};

describe('Popper', () => {
  it('Popper is rendering and hides on click outside', async () => {
    renderWithTheme(<PopperTemplate />);

    expect(screen.queryByText('popper content')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('popper content')).toBeInTheDocument();
  });
});
