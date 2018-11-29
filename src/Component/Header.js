import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
          <div>
          <div className="nav">
          <nav className="nav-wrapper teal">
              <div className="container">
            <Link to="" className="brand-logo white-text">Saylani Bank</Link>
  
            <Link to="" className="sidenav-trigger" data-target="mobile-links" >
  
            <i className="fa fa-bars"></i>
            </Link>
  
            <ul className="right hide-on-med-and-down">
            <li><Link to="/">Dashboard</Link></li>
           <li><Link to="/Account">Account</Link></li>
           <li><Link to="/Transaction">Transaction</Link></li>
              
            </ul>
  
            </div>
            </nav>
            </div>
            
            <ul className="sidenav" ref="mobile-links">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/Account">Account</Link></li>
            <li><Link to="/Transection">Transaction</Link></li>
            
              </ul>
              </div>
        );
    }

}

export default Header; 
