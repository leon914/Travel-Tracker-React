import React from 'react';
import GMaps from './gmaps';

class MapPlugin extends React.Component {

  render() {
    return (
      <div className="mapPlugin">

        <div>
            <article className="c-tile" id="mapcontainer1">
              <div id="map" className="c-tile__content">
                <div className="c-tile__body" style={{height: 500 + 'px'}}>
                  <div id="map"></div>
                  <GMaps></GMaps>
                </div>
              </div>
            </article>
        </div>

      </div>
    );
  }

}
console.log('MapPlugin loaded');
export default MapPlugin;
