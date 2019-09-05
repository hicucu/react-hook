import { useState, useEffect } from 'react';

function useFavicon(path) {
  const [favicon, setFavicon] = useState(path);

  const updateFavicon = () => {
    let $favicon = document.querySelector('link[rel*=\'icon\']');
    $favicon = $favicon || document.createElement('link');

    $favicon.type = 'image/x-icon';
    $favicon.rel = 'shortcut icon';
    $favicon.href = favicon;
  };
  useEffect(updateFavicon, favicon);
  return setFavicon;
}

export default useFavicon;
