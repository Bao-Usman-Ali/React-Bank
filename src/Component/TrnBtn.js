import React from 'react';
import { Link } from 'react-router-dom';

class TrnBtn extends React.Component {
    render() {

        return (

            <div className="card">
            <div className="card-action pRel">
                <div className="black-text p-2">
                    <i className="material-icons left medium">
                    monetization_on
                </i>
                    <h5>
                    Transaction
                </h5>
                </div>
                <div className="cardBtn">
                    <Link to="/Transaction" className="waves-effect waves-light  btn-small ">
                        View All
                </Link>
                </div>
            </div>
            <Link to="/Transaction">
                <div className="card-content center">
                    <span className="card-title">{this.props.TransLength}</span>
                    <span className="card-title">Transaction</span>
                </div>
            </Link>
        </div>

        )
    }
}
export default TrnBtn;