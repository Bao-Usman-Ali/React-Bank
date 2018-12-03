import React from 'react';
import AccBtn from './AccBtn';
import TrnBtn from './TrnBtn';
import {connect} from 'react-redux';

class Dashbord extends React.Component {
    
    render() {

        return (
            <div className="myBody">
                <div className="row">
                <div className="col s12 m6">
                    <AccBtn AccountLength={this.props.manu.length}/>
                </div>
                <div className="col s12 m6">
                    <TrnBtn TransLength={this.props.Trans.length}/>
                </div>
            </div>
            </div>
        )
    }
}
const countTA=(store)=>{
return {manu:store.accountReducer,Trans:store.transectionReducer}    
}
export default connect(countTA)(Dashbord);