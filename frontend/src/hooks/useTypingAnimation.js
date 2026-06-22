import { useEffect, useRef, useState } from 'react';

export function useTypingAnimation(text, speed = 35, active = true) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    if (!active) {
      setDisplayed('');
      indexRef.current = 0;
      return;
    }

    setDisplayed('');
    indexRef.current = 0;

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, active]);

  return displayed;
}
