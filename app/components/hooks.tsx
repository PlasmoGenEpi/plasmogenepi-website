"use client";
import { useEffect, useRef, useState } from "react";

export function usePrevious(item: any, defaultValue: any) {
  const prevVal = useRef<any>(defaultValue);
  useEffect(() => {
    prevVal.current = item;
  });
  return prevVal;
}

export function useWindowSize() {
  const screenSize = useRef<number>(0);

  screenSize.current = window.innerWidth;

  let handleResize = () => {
    screenSize.current = window.innerWidth;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize.current as number;
}

export function useMediaQuery() {
  const [screenSize, setScreenSize] = useState<number>(innerWidth);
  let handleResize = () => {
    setScreenSize(innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenSize <= 768) {
    return "sm";
  } else if (screenSize <= 1152) {
    return "md";
  } else {
    return "lg";
  }
}
