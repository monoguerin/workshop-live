import { useState } from 'react';
import client from '../apollo/client';

const useQuery = (query, options = {}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  client.query({
    query,
    ...options,
  }).then((result) => {
    if (result.errors) {
      setError(result.errors);
    }

    setData(result.data);
  }).catch((e) => {
    setError(e);
  }).finally(() => {
    setLoading(false);
  });

  return {
    data,
    loading,
    error,
  };
};

export default useQuery;