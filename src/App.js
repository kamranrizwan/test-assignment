import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};
 
const logoStyle = {
  left: '0px'
}

const center = {
  lat: -3.745,
  lng: -38.523
};

function App() {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return (
    <div className="App">
      <header style={logoStyle}>SWVL</header>
      <LoadScript
      googleMapsApiKey="AIzaSyBIzV5JHDuOwr4DIe7FqT1MdhXjD3FWb6o"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
      <div>Trip Information<div>date time</div></div>
    </div>
  );
}

export default App;
