import { useState } from 'react';
import client from '../../apollo/client';

export const runQuery = (query, opts) => client
  .query({
    query,
    ...opts,
  })
  .then((result) => {
    let error = false;

    if (result.errors && result.errors.length) {
      error = true;
    }

    return {
      data: result.data,
      error,
    };
  });

const useQuery = (query, opts = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  runQuery(query, opts)
    .then(({
      data: resultData,
      error: queryError,
    }) => {
      if (queryError) {
        setError(queryError);
      }

      setData(resultData);
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
