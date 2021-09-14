import { useCallback, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { paramsType, apiType, queryParamsType } from "../types/queryParamsType";

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

// 文档：https://react-query.tanstack.com/reference/useQuery#_top
// (params:paramsType, queryKey:string, api:apiType)
//
export const useVideoQuery = (...[params, queryKey, api]: queryParamsType) => {
  return useQuery(
    [queryKey, params],
    () => {
      const controller = new AbortController();
      const signal = controller.signal;
      const promise = api(params, signal);
      // Cancel the request if React Query calls the `promise.cancel` method
      promise.cancel = () => controller.abort();
      return promise;
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
      // keepPreviousData : true,
    }
  );
};
