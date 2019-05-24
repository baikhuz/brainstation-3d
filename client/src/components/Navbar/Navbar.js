import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.scss';

class Navbar extends Component{
render()
 {
  return (
    <div className="navBar">
        <div className="navBar__navLogo">
            <NavLink to="/">NexStep</NavLink>
        </div>
                    
        <div className="navBar__navLink">
            <ul className="navBar__navLink--nav">
                <NavLink to="/" className="navBar__navLink--nav-link" activeClassName="navBar__navLink--active"><li>New Search</li></NavLink>                            
                <NavLink to="/contactUs" className="navBar__navLink--nav-link" activeClassName="navBar__navLink--active"><li>Contact us</li></NavLink>
            </ul>
        </div>
    </div>
  );
}
}
export default Navbar;
