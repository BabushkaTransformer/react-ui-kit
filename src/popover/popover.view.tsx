import { cloneElement, FC, isValidElement, ReactElement, useRef, useState } from 'react';
import { Popper } from '../popper';
import { useEventListener } from '../utils/hooks/use-event-listener';
import { PopoverProps } from './popover.models';

export const Popover: FC<PopoverProps> = ({
  shown: shownProp,
  action = 'click',
  offsetDistance = 8,
  content,
  children,
  onShownChange,
  ...restProps
}) => {
  const [computedShown, setComputedShown] = useState(shownProp || false);

  const shown = typeof shownProp === 'boolean' ? shownProp : computedShown;
  const hoverable = action === 'hover';

  const popperRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLElement>(null);
  const hovered = useRef(false);

  const setShown = (value: boolean) => {
    if (typeof shownProp !== 'boolean') {
      setComputedShown(value);
    }

    if (typeof onShownChange === 'function') {
      onShownChange(value);
    }
  };

  const handleTargetClick = () => {
    if (hovered.current && shown) {
      return;
    }
    setShown(!shown);
  };

  const handleTargetEnter = () => {
    hovered.current = true;
    setShown(true);
  };

  const handleTargetLeave = () => {
    hovered.current = false;
    setShown(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!popperRef.current?.contains(e.target as Node) && !childRef.current?.contains(e.target as Node)) {
      setShown(false);
    }
  };

  useEventListener('click', handleClickOutside);
  useEventListener('click', handleTargetClick, childRef);
  useEventListener('mouseenter', handleTargetEnter, childRef, { shouldDetachEvent: !hoverable });
  useEventListener('mouseleave', handleTargetLeave, childRef, { shouldDetachEvent: !hoverable });

  return (
    <>
      {isValidElement(children) &&
        cloneElement(children as ReactElement, {
          ref: childRef,
        })}
      {shown && (
        <Popper
          {...restProps}
          role="dialog"
          targetRef={childRef}
          ref={popperRef}
          offsetDistance={offsetDistance}
          renderContent={() => content}
        />
      )}
    </>
  );
};
