import { useState, useEffect } from 'react';

function useMousePosition() {
  const [position, setPosition] = useState({
    posX: 0,
    posY: 0
  });

  const getMousePosition = (mouseEvent) => {
    const { screenX, screenY } = mouseEvent;
    setPosition({ posX: screenX, posY: screenY });
  };
  useEffect(() => {
    document.onmousemove = getMousePosition;
  });

  return position;
}
export default useMousePosition;
