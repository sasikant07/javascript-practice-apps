import { useCallback, useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value || "");

  // 1. Using React useEffect hooks
  /*
    useEffect(() => {
        const timerId = setTimeout(() => {
        setDebouncedValue(value);
        }, delay);

        return () => {
        clearTimeout(timerId);
        };
    }, [value]);
  */

  // 2. Using custom debounce method without react useEffect
  const debouncedFn = useCallback(debounce(setDebouncedValue, delay), []);
  debouncedFn(value);

  return debouncedValue;
}

function debounce(callback, delay) {
  let timerId;

  return function debounceFunction(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
