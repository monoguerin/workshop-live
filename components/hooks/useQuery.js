import { useState } from 'react';
import client from '../../apollo/client';

const useQuery = (query, opts = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  client
    .query({
      query,
      ...opts,
    })
    .then((result) => {
      if (result.errors && result.errors.length) {
        setError(true);
      }

      setData(result.data);
    })
    .catch(() => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });

  return {
    data,
    loading,
    error,
  };
};

export default useQuery;
