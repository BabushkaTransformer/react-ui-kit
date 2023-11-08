import { useEffect, useLayoutEffect } from 'react';

export const useIsomporphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
