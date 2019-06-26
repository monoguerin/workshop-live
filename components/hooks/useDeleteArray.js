import { useState, useCallback, useEffect } from 'react';

const useDeleteArray = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const removeValue = useCallback((index) => {
    const newValues = [
      ...values,
    ];

    newValues.splice(index, 1);

    setValues(newValues);
  }, [values]);

  useEffect(() => {
    setValues(initialValue);
  }, [initialValue]);

  return [values, removeValue];
};

export default useDeleteArray;
