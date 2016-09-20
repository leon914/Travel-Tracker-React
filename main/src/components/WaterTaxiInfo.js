import React from 'react';

class WaterTaxiInfo extends React.Component {

  render() {
    return (
      <div>
          <article className="c-tile">
              <div id="info" className="c-tile__content">
              <div className="c-tile__body">
                <p className="c-heading-bravo u-margin-bottom-none"><b> Water Taxi</b></p>
                <hr></hr>
                <p className="c-heading-delta">Here is some basic information about the water taxi:</p>
                <ul>
                  <li>The water taxi runs from 7am to 7pm.</li>
                  <li>The water taxi is completely free to use.</li>
                  <li>The water taxi works all week round unless there are hazards.</li>
                  <li>There are 2 pick-up/drop-off points which are located at Granary Wharf (just by the new South entrance of Leeds train station) and the Leeds Dock.</li>
                  <li>We have two water taxis on Leeds Dock, Twee and Drie.</li>
                </ul>
                </div>
              </div>
          </article>
      </div>
    );
  }

}

export default WaterTaxiInfo;
