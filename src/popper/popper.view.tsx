import { FC, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { autoPlacement, flip, Middleware, offset, shift, size, useFloating, hide } from '@floating-ui/react-dom';
import { PopperProps } from './popper.models';
import { convertFloatingDataToReactCSSProperties, getAutoPlacementAlign, isAuto } from './popper.utils';

export const Popper: FC<PopperProps> = (props) => {
  const {
    targetRef,
    children,
    placement: placementProp = 'left',
    sameWidth,
    offsetDistance = 8,
    offsetSkidding = 0,
    portalRoot = document.body,
    style: styleProp,
    onPlacementChange,
    renderContent,
    hideWhenReferenceHidden,
    ...restProps
  } = props;

  const floatingRef = useRef<HTMLDivElement>(null);

  const isNotAutoPlacement = isAuto(placementProp);

  const memoizedMiddlewares = useMemo(() => {
    const middlewares: Middleware[] = [
      offset({
        crossAxis: offsetSkidding,
        mainAxis: offsetDistance,
      }),
    ];

    if (isNotAutoPlacement) {
      middlewares.push(flip());
    } else {
      middlewares.push(autoPlacement({ alignment: getAutoPlacementAlign(placementProp) }));
    }

    middlewares.push(shift());

    if (sameWidth) {
      middlewares.push(
        size({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
            });
          },
        })
      );
    }

    if (hideWhenReferenceHidden) {
      middlewares.push(hide());
    }

    return middlewares;
  }, [offsetSkidding, offsetDistance, isNotAutoPlacement, sameWidth, placementProp, hideWhenReferenceHidden]);

  const {
    x: floatingDataX,
    y: floatingDataY,
    strategy: floatingPositionStrategy,
    placement: resolvedPlacement,
    refs,
    middlewareData: { hide: hideMiddlewareData },
  } = useFloating({
    placement: isNotAutoPlacement ? placementProp : undefined,
    middleware: memoizedMiddlewares,
  });

  useLayoutEffect(() => {
    refs.setReference(targetRef.current);

    if (!floatingRef.current) return;
    refs.setFloating(floatingRef.current);
  }, [refs, targetRef]);

  useEffect(() => {
    if (resolvedPlacement && typeof onPlacementChange === 'function') {
      onPlacementChange({ placement: resolvedPlacement });
    }
  }, [onPlacementChange, resolvedPlacement]);

  const dropdown = (
    <div
      {...restProps}
      ref={floatingRef}
      style={{
        ...styleProp,
        ...convertFloatingDataToReactCSSProperties(
          floatingPositionStrategy,
          floatingDataX,
          floatingDataY,
          sameWidth ? null : undefined
        ),
        ...(hideMiddlewareData?.referenceHidden && {
          visibility: 'hidden',
        }),
      }}
    >
      {renderContent ? renderContent(props) : children}
    </div>
  );

  return createPortal(dropdown, portalRoot);
};
