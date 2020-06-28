import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const REACT_APP_MAPBOX_TOKEN =
  'pk.eyJ1IjoibnVlc3NsZXJtIiwiYSI6ImNrYnpteTV6ejFiNnYyd3Rianh2eXZnbzYifQ.o9U1MXqcUIJ9iy1yhmKgKg';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  // console.log('process', process.env.REACT_APP_MAPBOX_TOKEN);
  return (
    <ReactMapGL
      {...viewport}
      // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
};

export default Map;
