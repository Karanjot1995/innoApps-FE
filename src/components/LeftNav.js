import React, {Component} from 'react';
import View from './View';


class LeftNav extends Component {

  render() {
    return (
      <div className="nav-container">
       <div className="text-left sub-nav d-flex align-items-center">
         <p>Manage Clarity</p>
         <img className="mx-3" src="./images/path-2.svg" width="5px" height="8px"/>
         <p>Counterfeit</p>
         <img className="mx-3" src="./images/path-2.svg" width="5px" height="8px"/>
         <p>View</p>
       </div>
      </div>
    );
  }
}


export default LeftNav;
