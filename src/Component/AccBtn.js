import React from 'react';
import { Link } from 'react-router-dom'

class AccountBtn extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-action">
                    <div className="row">
                        <div className="col s4">
                       <i className="fa fa-user prefix user "></i><h5 className="right accounts"> Accounts</h5> 

                        </div>
                    
                        <div className="col s5 ">
                            <Link to="/AddAccount" className="waves-effect waves-light btn-small black white-text  btn_my">
                                Create Account
                            </Link>
                        </div>
                        <div className="col s3 ">
                            <Link to="/Account" className="waves-effect waves-light btn-small black white-text  btn_my">
                                View All
                            </Link>
                        </div>
                    </div>
                    <hr/>
                </div>
                <Link to="/Account">
                <div className="card-content center">
                    <span className="card-title">0</span>
                    <span className="card-title">Accounts</span>
                </div>
                </Link>
            </div>
        )
    }
}
export default AccountBtn;