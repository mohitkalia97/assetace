import { useState, useEffect } from 'react';

const UseCurrencyDataFetch = (url, currency) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}?convert=${currency}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, currency]);
  
  return { data, error, loading };
};
export default UseCurrencyDataFetch;
