import React from 'react';
import { Link } from 'react-router-dom'

class AccBtn extends React.Component {
    render() {
        
        return (
            <div className="card ">
                <div className="card-action pRel">
                    <div className="black-text p-2">
                        <i className="material-icons left medium">
                            account_circle
                    </i>
                        <h5>
                            Accounts
                    </h5>
                    </div>
                    <div className="cardBtn">
                    <Link to="/AddAcc" className="waves-effect left waves-light create btn-small ">
                                Create Account
                    </Link>
                        <Link to="/Account" className="waves-effect right waves-light view-all   btn-small ">
                            view All
                    </Link>
                    
                    </div>
                </div>
                <Link to="/Account">
                    <div className="card-content center">
                        <span className="card-title">{this.props.AccountLength}</span>
                        <span className="card-title">Accounts</span>
                    </div>
                </Link>
            </div>

        )
    }
}
export default AccBtn;