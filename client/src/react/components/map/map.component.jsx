import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
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
  const [logEntries, setLogEntries] = useState([]);

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
      console.log(logEntries);
    })();

    window.addEventListener('resize', _resize);
    // _resize();

    // return function cleanup() {
    //   window.removeEventListener('resize', _resize);
    // };

    return () => {
      // clean up things ....
      window.removeEventListener('resize', _resize);
    };
  }, [setLogEntries]);
  // for understanding the useEffect dependency array:
  // https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44

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
      >
        {logEntries.map((entry) => (
          <Marker
            // in map, you can use {object._id} to list a unique id,
            // based on the objects placement in the array of objects
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div>{entry.title}</div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
