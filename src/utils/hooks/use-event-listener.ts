import { RefObject, useEffect, useRef } from 'react';
import { useIsomporphicLayoutEffect } from './use-isomporphic-layout-effect';

type UseEventListenerOptions = boolean | (AddEventListenerOptions & { shouldDetachEvent?: boolean });

// Интерфейс useEventListener на основе событий MediaQueryList
function useEventListener<K extends keyof MediaQueryListEventMap>(
  eventName: K,
  handler: (event: MediaQueryListEventMap[K]) => void,
  element: RefObject<MediaQueryList>,
  options?: UseEventListenerOptions
): void;

// Интерфейс useEventListener на основе событий окна
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: UseEventListenerOptions
): void;

// Интерфейс useEventListener на основе событий элемента
function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = HTMLDivElement>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: UseEventListenerOptions
): void;

// Интерфейс useEventListener на основе событий документа
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: UseEventListenerOptions
): void;

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void,
>(
  eventName: KW | KH | KM,
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | MediaQueryListEventMap[KM] | Event) => void,
  element?: RefObject<T>,
  options?: UseEventListenerOptions
) {
  const savedHandler = useRef(handler);

  useIsomporphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement: T | Window = element?.current ?? window;
    const detachEvent = typeof options === 'object' && options.shouldDetachEvent;

    if (!(!detachEvent && targetElement && targetElement.addEventListener)) return;

    const listener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, listener, options);

    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

export { useEventListener };
