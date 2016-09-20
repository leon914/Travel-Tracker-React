import React from 'react';
import ReactDOM from 'react-dom';
import Info from './info';
import Navbar from './navbar';




class Main extends React.Component {

  render() {
    return (
        <div>
          <div className="c-heading-alpha u-text-center"><b>LEEDS DOCK</b></div>
          <hr className="u-margin-bottom"></hr>
          <Navbar />
        </div>
    );
  }
}
console.log('Main loaded');
export default Main;
