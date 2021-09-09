import { useCallback, useEffect, useRef } from "react";

export const useBackground = (color: string) => {
  const defaultBg = "#fff";
  useEffect(() => {
    document.body.style.background = color;
    return () => {
      document.body.style.background = defaultBg;
    };
  }, [color]);
};

export const useMountedRef = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export const useSafeImplement = <T>(dispatch: (...args: Array<T>) => void) => {
  const mountedRef = useMountedRef();
  return useCallback(
    (...args: Array<T>) => (mountedRef.current ? dispatch(...args) : void 0),
    [mountedRef, dispatch]
  );
};
