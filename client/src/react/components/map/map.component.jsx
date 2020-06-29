import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import MapStylePicker from '../map-style-picker/map-style-picker.component.jsx';

import { listLogEntries } from '../../API.js';

import './map.styles.scss';

const REACT_APP_MAPBOX_TOKEN =
  'pk.eyJ1IjoibnVlc3NsZXJtIiwiYSI6ImNrYnpteTV6ejFiNnYyd3Rianh2eXZnbzYifQ.o9U1MXqcUIJ9iy1yhmKgKg';

// the following mapbox implementation was partially taken from
// http://vis.academy/#/building-a-geospatial-app/1-starting-with-a-map

// how to turn a stateful component without hooks into a functional component
// with react-hooks useState and useEffect

const Map = () => {
  const [style, setStyle] = useState('mapbox://styles/mapbox/light-v9');
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 50.5,
    longitude: 10.4541194,
    zoom: 5.3,
    maxZoom: 16,
  });

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      console.log(logEntries);
    })();

    window.addEventListener('resize', _resize);
    // _resize();

    return function cleanup() {
      window.removeEventListener('resize', _resize);
    };
  }, []);

  function _onViewportChange(viewportChange) {
    setViewport({ ...viewport, ...viewportChange });
  }

  function _resize() {
    _onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  function onStyleChange(style) {
    setStyle(style);
  }

  // console.log(style);
  // console.log(viewport);
  // console.log('process', process.env.REACT_APP_MAPBOX_TOKEN);

  return (
    <div className="map-component">
      <MapStylePicker onStyleChange={onStyleChange} currentStyle={style} />
      <ReactMapGL
        className="map-gl"
        {...viewport}
        mapStyle={style}
        // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewportChange) => _onViewportChange(viewportChange)}
      />
    </div>
  );
};

export default Map;
