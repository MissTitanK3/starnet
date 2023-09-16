'use client';

import React, { useEffect, RefObject } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement>, handler: () => void): void => {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref?.current || ref.current.contains(e.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener as any); // This cast is because TouchEvent and MouseEvent aren't exactly the same. Alternatively, you could split the handlers.
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener as any);
    };
  }, [handler, ref]);
};

export { useClickOutside };
