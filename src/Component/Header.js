import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <nav className="grey darken-4">
            <div className="nav-wrapper container">
              <Link to="/" className="brand-logo cyan-text">Logo</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/" className="cyan-text">Dashbord</Link></li>
                <li><Link to="/Account"  className="cyan-text">Account</Link></li>
                <li><Link to="/Transection" className="cyan-text">Transection</Link></li>
              </ul>
            </div>
          </nav>
        )
    }

}

export default Header; 