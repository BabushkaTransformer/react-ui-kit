import { Children, cloneElement, ReactElement, ReactNode } from 'react';

/**
 * Вернуть массив, в котором между каждым узлом React из входных дочерних элементов будет вставлен элемент-разделитель.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
export const joinChildren = (children: ReactNode, separator: ReactElement) => {
  const childrenArray = Children.toArray(children).filter(Boolean);

  return childrenArray.reduce<ReactNode[]>((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push(cloneElement(separator, { key: `separator-${index}` }));
    }

    return output;
  }, []);
};
