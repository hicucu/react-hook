import { useState, useEffect } from 'react';

function useOnline(onChange) {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  const removeEvent = () => {
    window.removeEventListener('online', handleChange);
    window.removeEventListener('offline', handleChange);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return removeEvent();
  });

  return status;
}

export default useOnline;
