import React from 'react';


class CyclingInfo extends React.Component {

  render() {
    return (
      <div>
          <article className="c-tile">
              <div id="info" className="c-tile__content">
              <div className="c-tile__body">
                <p className="c-heading-bravo u-margin-bottom-none"><b> Cycling</b></p>
                <hr></hr>
                <p className="c-heading-delta">Here is some basic information about the buses that run to the dock:</p>
                <ul>
                  <li>#</li>
                  <li>#</li>
                  <li>#</li>
                  <li>#</li>
                  <li>#</li>
                </ul>
                </div>
              </div>
          </article>
      </div>
    );
  }

}

export default CyclingInfo;
