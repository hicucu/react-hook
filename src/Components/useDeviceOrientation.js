import { useState, useEffect } from 'react';

function useDeviceOrientation() {
  const [state, setState] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0
  });
  const deviceOrientation = (event) => {
    const { alpha, beta, gamma } = event;
    setState({ alpha, beta, gamma });
  };
  useEffect(() => {
    window.addEventListener('deviceorientation', deviceOrientation);
    return () => window.removeEventListener('deviceorientation', deviceOrientation);
  });
  return state;
}

export default useDeviceOrientation;
