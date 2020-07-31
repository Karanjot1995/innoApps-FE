import React, {Component} from 'react';
import View from './View';
import Header from './Header';


class Home extends Component {

  render() {
    return (
      <div className="view-container">
       
       <Header/>
       <div className="text-left sub-nav d-flex align-items-center">
         <p>Manage Clarity</p>
         <img className="mx-3" src="./images/path-2.svg" width="5px" height="8px"/>
         <p>Counterfeit</p>
         <img className="mx-3" src="./images/path-2.svg" width="5px" height="8px"/>
         <p>View</p>
       </div>
       <View/>
      </div>
    );
  }
}


export default Home;
