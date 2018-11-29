import React from 'react';
import { Link } from 'react-router-dom'

class AccBtn extends React.Component {
    render() {
        
        return (
            <div className="card grey darken-4">
                <div className="card-action pRel">
                    <div className="white-text p-2">
                        <i className="material-icons left medium">
                            account_circle
                    </i>
                        <h5>
                            Accounts
                    </h5>
                    </div>
                    <div className="cardBtn">
                        <Link to="/Account" className="waves-effect waves-light cyan accent-4 btn z-depth-5">
                            view
                    </Link>
                    </div>
                </div>
                <Link to="/AddAcc">
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