import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback; // referrring to updated callback
  useEffect(() => {
    const timerId = setTimeout(callbackRef.current, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [delay]);
}
