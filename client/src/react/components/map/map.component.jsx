import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import MapStylePicker from '../map-style-picker/map-style-picker.component.jsx';

import { listLogEntries } from '../../API.js';

// import Pin from '../../../assets/map-pin.svg';

import './map.styles.scss';

const REACT_APP_MAPBOX_TOKEN =
  'pk.eyJ1IjoibnVlc3NsZXJtIiwiYSI6ImNrYnpteTV6ejFiNnYyd3Rianh2eXZnbzYifQ.o9U1MXqcUIJ9iy1yhmKgKg';

// the following mapbox implementation was partially taken from
// http://vis.academy/#/building-a-geospatial-app/1-starting-with-a-map

// how to turn a stateful component without hooks into a functional component
// with react-hooks useState and useEffect

const Map = () => {
  const [style, setStyle] = useState('mapbox://styles/mapbox/light-v9');
  const [showPopup, setShowPopup] = useState({});
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
      // console.log(logEntries);
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
          // because there are two html elements listed after one another,
          // we need to wrap them in a fragment <> </> (or just a div)
          <>
            <Marker
              // in map, you can use {object._id} to list a unique id,
              // based on the objects placement in the array of objects
              key={entry._id}
              latitude={entry.latitude}
              longitude={entry.longitude}
              // offsetLeft={-12}
              // offsetTop={-24}
            >
              {
                /* #region PIN */
                // <Pin
                //   className="pin-container"
                //   style={{
                //     /**
                //      * The calc() CSS function lets you perform calculations when
                //      * specifying CSS property values. It can be used anywhere a
                //      * <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> is allowed.
                //      * https://css-tricks.com/simple-little-use-case-vmin/
                //      */
                //     wdith: `calc(1vmin * ${viewport.zoom})`,
                //     height: `calc(1vmin * ${viewport.zoom})`,
                //   }}
                // />
                /* #endregion */
              }
              <div
                onClick={() =>
                  setShowPopup({
                    /** only set the entry._id key - value to true, which was selected
                     * we don't want to cache any key-value pairs
                     */
                    // ...showPopup,
                    [entry._id]: true,
                  })
                }
              >
                <img
                  className="pin-container"
                  style={{
                    wdith: `${5 * viewport.zoom}px`,
                    height: `${5 * viewport.zoom}px`,
                  }}
                  src="https://i.imgur.com/y0G5YTX.png"
                  alt="pin"
                />
              </div>
            </Marker>
            {showPopup[entry._id] ? (
              <Popup
                latitude={entry.latitude}
                longitude={entry.longitude}
                closeButton={true}
                closeOnClick={true}
                onClose={() =>
                  setShowPopup({
                    /** set showPopup to an *empty object*, so that all entry._id keys will
                     * receive a null value, whenever the user closes the popup
                     * we don't want to cache any key-value pairs
                     * */
                    // ...showPopup,
                    // [entry._id]: false,
                  })
                }
                anchor="top"
              >
                <div className="map-popup-container">
                  {
                    // TODO: set z-index dynamically, so that the pop-ups don't overlap
                  }
                  <h4>{entry.title}</h4>
                  <p>{entry.comments}</p>
                </div>
              </Popup>
            ) : null}
          </>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
