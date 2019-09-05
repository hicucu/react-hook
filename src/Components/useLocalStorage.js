import { useState, useEffect } from 'react';

function useLocalStorage(name, initialValue) {
  const [currentLS, setCurrentLS] = useState(initialValue);

  const setValue = (value) => {
    localStorage.setItem(name, value);
  };

  useEffect(setValue);

  return { currentLS, setLS: setCurrentLS };
}
export default useLocalStorage;
