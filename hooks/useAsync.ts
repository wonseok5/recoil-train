import { useState, useEffect, useCallback } from "react";

export const useAsync = <T extends Function | void>(
  asyncCallback: () => Promise<T>,
  deps: any[] = []
): [Error | null, () => void] => {
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    let cleanUpFunc: T;
    asyncCallback()
      .then((func) => {
        cleanUpFunc = func;
      })
      .catch(setError);
    return () => {
      if (cleanUpFunc) cleanUpFunc();
    };
  }, deps);
  const resetError = useCallback(() => setError((_) => null), []);
  return [error, resetError];
};
