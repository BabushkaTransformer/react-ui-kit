import { ReactNode } from 'react';
import { PopperProps } from '../popper';

export type PopoverProps = Omit<PopperProps, 'content' | 'targetRef' | 'renderContent'> & {
  /**
   * - `"click"` – показывается/скрывается только при нажатии.
   * - `"hover"` – показывается/скрывается при наведении/отведении мыши.
   */
  action?: 'click' | 'hover';
  /**
   * Если передан, то всплывающее окно будет показано/скрыто в зависимости от значения свойства.
   */
  shown?: boolean;
  /**
   * Содержимое всплывающего окна.
   */
  content?: ReactNode;
  /**
   * Вызывается при каждом изменении видимости всплывающего окна.
   */
  onShownChange?(shown: boolean): void;
};
