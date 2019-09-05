import { useState, useEffect } from 'react';

function useGeolocation() {
  const [coords, setCoords] = useState({ lat: 0, long: 0 });
  const [error, setError] = useState(null);

  const geoSuccess = (position) => {
    const {
      coords: { latitude, longitude }
    } = position;
    setCoords({ lat: latitude, long: longitude });
  };
  const geoError = () => {
    setError('Geolocation Error');
  };

  const geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };

  const getGeo = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  };
  useEffect(getGeo, []);

  return { coords, error };
}
export default useGeolocation;
