import { useCallback, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:3000/api';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        credentials: 'include',
      });

      if (!response.ok) throw new Error('No se pudieron cargar los artículos');

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};
