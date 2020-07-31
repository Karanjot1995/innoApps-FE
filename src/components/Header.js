import React, {Component} from 'react';


class Header extends Component {

  render() {
    return (
      <div className="header bg-white" id="header">

        <div className="container-fluid p-0">
           
           <nav className="navbar navbar-expand-lg mx-auto">
             <div className="d-flex w-sm-30 pr-3 p-md-0 align-items-center">
               <a className="px-0 d-block d-lg-none pr-4" 
                
                 data-target="#fullnavbar">
               </a>

             </div>
             <nav className="navbar navbar-expand-lg mr-auto p-0"  id="left-nav">
               <div className="" >
                  <p className="view">View</p>
                 </div>
               </nav>
              <ul className="navbar-nav flex-row w-sm-70 pl-4 p-md-0 my-0" id="right-nav">
                <li className="nav-item search-section d-flex align-items-center">
                  <form className="search form-inline my-lg-0 mx-lg-3">
                    <div>
                      <img src="./images/search.svg" width="19px" height="19px"/>
                      <input
                        className="form-control border-0"
                        type="search"
                        placeholder="Search here"
                        aria-label="Search"
                      />
                    </div>
                  </form>
                  <a className="notification">
                    <img src="./images/bell.png" height="20px" width="20px"/>
                  </a>
                  <div className="profile-btn d-flex align-items-center">
                    <a className="profile-pic mx-2">
                      <img src="./images/profile.png" height="40px" width="40px"/>
                    </a>
                    <p className="profile-name mx-2 fs-14">Mark Collins</p>
                    <a className="mx-1">
                      <img src="./images/arrow-down.svg" width="11px"/>
                    </a>
                  </div>
                 
                </li>

                 {/* <li className="nav-item ml-3 d-flex align-items-center">
                   <div className="nav-link sign-in">
                     <a className="btn btn-primary" href="/sign-in">Sign In</a>
                   </div>
                 </li> */}
               
               
                <li className="nav-item d-flex align-items-center">
                  <a className="nav-link cart-icon pl-3 pr-0" to="/cart">
                    
                  </a>
                </li>
               </ul>

           </nav>


         </div>

      </div>
    );
  }
}


export default Header;
