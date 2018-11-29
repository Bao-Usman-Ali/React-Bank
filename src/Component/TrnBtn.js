import React from 'react';
import { Link } from 'react-router-dom';

class TrnBtn extends React.Component {
    render() {

        return (

            <div className="card grey darken-4">
            <div className="card-action pRel">
                <div className="white-text p-2">
                    <i className="material-icons left medium">
                    monetization_on
                </i>
                    <h5>
                    Transection
                </h5>
                </div>
                <div className="cardBtn">
                    <Link to="/Transection" className="waves-effect waves-light cyan accent-4 btn z-depth-5 ">
                        View
                </Link>
                </div>
            </div>
            <Link to="/Transection">
                <div className="card-content center">
                    <span className="card-title">{this.props.TransLength}</span>
                    <span className="card-title">Transection</span>
                </div>
            </Link>
        </div>

        )
    }
}
export default TrnBtn;