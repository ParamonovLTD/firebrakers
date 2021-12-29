import React, { useEffect } from 'react';

interface Size {
  width?: number;
  height?: number;
}

export const useWindowSize = (): Size => {
  const isSSR = typeof window !== 'undefined';
  const [windowSize, setWindowSize] = React.useState<Size>({
    width: isSSR ? 1200 : undefined,
    height: isSSR ? 800 : undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};
