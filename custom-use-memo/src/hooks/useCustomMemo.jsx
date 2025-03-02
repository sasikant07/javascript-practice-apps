import { useEffect, useRef } from "react";

export default function useCustomMemo(cb, dependecyArr) {
  const ref = useRef({
    memoizedValue: undefined,
    lastDependency: undefined,
  });

  if (!areArraysEqual(ref.current.lastDependency, dependecyArr)) {
    ref.current.memoizedValue = cb();
    ref.current.lastDependency = dependecyArr;
  }

  useEffect(() => {
    return () => {
      ref.current = null;
    };
  }, []);

  return ref.current.memoizedValue;
}

function areArraysEqual(prev, curr) {
  if (!prev || !curr || prev.length !== curr.length) {
    return false;
  }
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== curr[i]) {
      return false;
    }
  }
  return true;
}
