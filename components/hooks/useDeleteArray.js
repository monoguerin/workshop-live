import { useState, useCallback } from 'react';

const useDeleteArray = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const removeValue = useCallback((index) => {
    const newValues = [
      ...values,
    ];

    newValues.splice(index, 1);

    setValues(newValues);
  }, [values]);

  return [values, removeValue];
};

export default useDeleteArray;
