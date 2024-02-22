import { useEffect, useRef } from "react";

export function usePrevious(item: any, defaultValue: any) {
  const prevVal = useRef<any>(defaultValue);
  useEffect(() => {
    prevVal.current = item;
  });
  return prevVal;
}
