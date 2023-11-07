import { HtmlHTMLAttributes, ReactNode, RefObject } from 'react';
import { Placement } from '@floating-ui/react-dom';

export type AutoPlacementType = 'auto' | 'auto-start' | 'auto-end';
export type PlacementWithAuto = Placement | AutoPlacementType;

export type PopperProps = HtmlHTMLAttributes<HTMLDivElement> & {
  targetRef: RefObject<HTMLElement>;
  /**
   * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
   */
  placement?: PlacementWithAuto;
  /**
   * Отступ по вспомогательной оси
   */
  offsetSkidding?: number;
  /**
   * Отступ по главной оси
   */
  offsetDistance?: number;
  /**
   * Выставлять ширину равной target элементу
   */
  sameWidth?: boolean;
  /**
   * Кастомный root-элемент портала.
   */
  portalRoot?: Element | DocumentFragment;
  /**
   * При передаче содержимого в `children`, он будет обёрнут во внутренний контейнер.
   *
   * Если хочется управлять этим контейнером, то используйте данную функцию.
   *
   * > ⚠️ Параметр `children` будет проигнорирован.
   */
  renderContent?(props: PopperProps): ReactNode;
  onPlacementChange?(data: { placement?: Placement }): void;
  /**
   * Принудительно скрывает компонет если целевой элемент исчез
   */
  hideWhenReferenceHidden?: boolean;
};
