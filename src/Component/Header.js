import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <nav className="teal">
            <div className="nav-wrapper container">
              <Link to="/" className="brand-logo">Saylani Bank</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/Account">Account</Link></li>
                <li><Link to="/Transaction">Transaction</Link></li>
              </ul>
            </div>
          </nav>
        )
    }

}

export default Header; 