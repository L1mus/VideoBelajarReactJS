import { useState, useEffect, useCallback } from "react";

const useApi = (apiFunc, ...args) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stringifiedArgs = JSON.stringify(args);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await apiFunc(...args);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiFunc, stringifiedArgs]);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await apiFunc(...args);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiFunc, stringifiedArgs]);

  return { data, isLoading, error, refetch };
};

export default useApi;
