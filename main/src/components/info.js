import React from 'react';

class Info extends React.Component {

  render() {
    return (
      <div className="info">
                <div className="o-layout__item">
                  <article className="c-tile">
                    <div className="c-tile__content">
                      <div className="c-tile__body">
                        <p className="c-heading-bravo u-margin-bottom-none"><b>{this.props.transportType}</b></p>
                        <hr></hr>
                        <p className="c-heading-delta">{this.props.desc}</p>
                        <ul>
                          <li>The water taxi runs from 7am to 7pm.</li>
                          <li>The water taxi is completely free to use.</li>
                          <li>The water taxi works all week round unless there are hazards.</li>
                          <li>There are 2 pick-up/drop-off points which are located at Granary Wharf (just by the new South entrance of Leeds train station) &#38; Leeds Dock.</li>
                          <li>We have two water taxis on Leeds Dock, Twee &#38; Drie.</li>
                        </ul>
                      </div>
                     </div>
                    </article>
                   </div>
          </div>
    );
  }
}
console.log('Info loaded');
export default Info;
