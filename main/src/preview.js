import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

// By requiring the stylesheet here like this,
// webpack will append the contents inside a
// style tag in the document HEAD.

require('../styles/components/main.scss');

ReactDOM.render(
          <div className="o-container">
            <Main />
          </div>
, window.container);
