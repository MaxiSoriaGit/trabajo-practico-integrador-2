import { useState, useEffect } from 'react';
const BASE_URL = 'http://localhost:3000/api';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${BASE_URL}${url}`, {
        credentials: 'include',
      });

      if (!response.ok) throw new Error('No se pudieron cargar los artículos');

      const result = await response.json();
      setData(result);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
