import React from 'react';
import { Tabs, Tab } from 'blackjack-tabs';
import MapPlugin from './mapPlugin';
import WaterTaxiInfo from './WaterTaxiInfo';
import BusInfo from './BusInfo';
import WalkingInfo from './WalkingInfo';
import CyclingInfo from './CyclingInfo';
import DrivingInfo from './DrivingInfo';

class Navbar extends React.Component {


  render() {
     return (
       <Tabs tabsId="basic-example">
           <Tab title="Water Taxi">
              <MapPlugin />
              <WaterTaxiInfo />
           </Tab>
           <Tab title="Bus">
              <BusInfo />
           </Tab>
           <Tab title="Walking">
              <WalkingInfo />
           </Tab>
           <Tab title="Cycling">
              <CyclingInfo />
           </Tab>
           <Tab title="Driving">
              <DrivingInfo />
           </Tab>
       </Tabs>
     );
  }
}

console.log('Navbar loaded');
export default Navbar;
