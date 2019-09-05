import React from "react";
import ReactDOM from "react-dom";
import useDeviceOrientation from "./Components/useDeviceOrientation";
import useFavicon from "./Components/useFavicon";
import useGeolocation from "./Components/useGeolocation";
import useOnline from "./Components/useOnline";
import useMousePosition from "./Components/useMousePosition";
import useLocalStorage from "./Components/useLocalStorage";

function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();
  const setFavicon = useFavicon();
  const changeFavicon = () => {
    setFavicon(
      "https://ssl.pstatic.net/sstatic/search/favicon/favicon_140327.ico"
    );
  };
  const {
    coords: { lat, long },
    error
  } = useGeolocation();

  const onLine = useOnline();

  const { posX, posY } = useMousePosition();
  const { currentLS, setLS } = useLocalStorage("test", "test");

  return (
    <div className="App">
      <h1>Superhooks!</h1>
      <h2>useDeviceOrientation</h2>
      <ul>
        <li>Alpha: {alpha}</li>
        <li>Beta: {beta}</li>
        <li>Gamma: {gamma}</li>
      </ul>
      <h2>useFavicon</h2>
      <button onClick={changeFavicon}>Change</button>

      <h2>useGeolocation</h2>
      <ul>
        <li>Latitube : {lat}</li>
        <li>Longitude: {long}</li>
        <li>Geolocation Error: {error}</li>
      </ul>
      <h2>useKeyPress</h2>
      <h2>useLocalStorage</h2>
      <ul>
        <li>Current Value: {currentLS}</li>
        <button onClick={() => setLS("12345")}>Set value : 12345</button>
        <button onClick={() => setLS(null)}>Clear LS</button>
      </ul>
      <h2>useMousePosition</h2>
      <ul>
        <li>Mouse X: {posX}</li>
        <li>Mouse Y: {posY}</li>
      </ul>
      <h2>useOnline</h2>
      <p>Are we online ? {onLine ? "Online" : "Offline"}</p>
      <h2>useLockScroll</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
