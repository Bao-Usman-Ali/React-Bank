import React from 'react';
import AccBtn from './AccBtn';
import TrnBtn from './TrnBtn';

class Body extends React.Component {
    render() {
        return (
            <div className="myBody">
                <div className="row">
                <div className="col s12 m6">
                    <AccBtn />
                </div>
                <div className="col s12 m6">
                    <TrnBtn />
                </div>
            </div>
            </div>
        )
    }
}

export default Body; 