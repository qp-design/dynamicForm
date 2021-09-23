import { useCallback, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "react-query";
import { queryParamsType } from "../types/queryParamsType";
import isEmpty from "lodash/isEmpty";
import { useParamsContext } from "../context/paramsProvider";

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

export const useVideoQuery = (...[params, queryKey, api]: queryParamsType) => {
  const { setParams } = useParamsContext();
  const queryClient = useQueryClient();

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
      enabled: !isEmpty(params),
      onError: (error) => {
        setParams(null);
        queryClient.removeQueries([queryKey, params], { exact: true });
      },
    }
  );
};
