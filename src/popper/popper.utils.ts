import { CSSProperties } from 'react';
import { Placement, Strategy, UseFloatingData } from '@floating-ui/react-dom';
import { AutoPlacementType, PlacementWithAuto } from './popper.models';

export const convertFloatingDataToReactCSSProperties = (
  strategy: Strategy,
  x: UseFloatingData['x'],
  y: UseFloatingData['y'],
  initialWidth: CSSProperties['width'] | null = 'max-content'
): CSSProperties => {
  const styles: CSSProperties = {
    position: strategy,
    top: y,
    right: 'auto',
    bottom: 'auto',
    left: x,
  };
  if (initialWidth !== null) {
    styles.width = initialWidth;
  }
  return styles;
};

export const getAutoPlacementAlign = (placement: AutoPlacementType): 'start' | 'end' | null => {
  const align = placement.replace(/auto-|auto/, '');
  return align === 'start' || align === 'end' ? align : null;
};

export const isAuto = (placement: PlacementWithAuto): placement is Placement => !placement.startsWith('auto');
