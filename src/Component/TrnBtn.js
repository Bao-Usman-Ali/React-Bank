import React from 'react';
import { Link } from 'react-router-dom';

class TrnBtn extends React.Component {
    render() {
        return (

            <div className="card">
            <div className="card-action">
                <div className="row">
                    <div className="col s5">
                   <i className="fa fa-dollar-sign prefix dollar"></i><h5 className="right trans">Transactions</h5>

                    </div>
                
                    <div className="col s7">
                        <Link to="/Transaction" className="waves-effect waves-light btn-small black white-text right  btn_my">
                            View All
                        </Link>
                    </div>
                </div>
                <hr/>
            </div>
            <Link to="/Transection">
            <div className="card-content center">
                <span className="card-title">0</span>
                <span className="card-title">Transactions</span>
            </div>
            </Link>
        </div>
        )
    }
}
export default TrnBtn;
