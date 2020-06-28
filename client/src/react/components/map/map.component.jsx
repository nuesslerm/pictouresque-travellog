import React from 'react';
import ReactMapGL from 'react-map-gl';
import MapStylePicker from '../map-style-picker/map-style-picker.component.jsx';

import './map.styles.scss';

const REACT_APP_MAPBOX_TOKEN =
  'pk.eyJ1IjoibnVlc3NsZXJtIiwiYSI6ImNrYnpteTV6ejFiNnYyd3Rianh2eXZnbzYifQ.o9U1MXqcUIJ9iy1yhmKgKg';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: 'mapbox://styles/mapbox/light-v9',
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        longitude: -74,
        latitude: 40.7,
        zoom: 11,
        maxZoom: 16,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  onStyleChange = (style) => {
    this.setState({ style });
  };

  _onViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });
  };

  _resize = () => {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // console.log('process', process.env.REACT_APP_MAPBOX_TOKEN);
  render() {
    return (
      <div className="map-component">
        <MapStylePicker
          onStyleChange={this.onStyleChange}
          currentStyle={this.state.style}
        />
        <ReactMapGL
          className="map-gl"
          {...this.state.viewport}
          mapStyle={this.state.style}
          // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => this._onViewportChange(viewport)}
        />
      </div>
    );
  }
}

export default Map;
