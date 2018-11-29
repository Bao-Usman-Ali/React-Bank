import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from './modal';
class Transaction extends React.Component {
  state={
    myIData:''
  }
  myStateChanger=(i)=>{
    document.querySelector('.transaction').style.display="block";
this.setState({myIData:i})
  }
  myAccountD=(i)=>{
    return <tr key={i.Tid}>
    
    <td href="#modal1"  onClick={()=>{this.myStateChanger(i)}}>{i.Tid}</td>
              <td>{i.TimeD}</td>
              <td>{i.AccountId}</td>
              <td>{i.type}</td>
              <td>{i.Amount}</td>
              </tr>
     
  }
  render() {
    return (
      <div className="container">
      <br/>
      <div className="teal">
      <div className="row" >
      <div className="col s6">
      
      <Link to="/"> <button className="btn black white-text">back to dashboard</button> </Link>
      </div>
      </div>
       <div className="row" >
      <div className="col s12">
      
      <h3 className="center white-text"><i className="fa fa-dollar-sign "></i> Transactions</h3>
      <hr/>
      </div>
        
      </div>
      </div>
        <table className="centered responsive-table"> 
          <thead>
          <tr className="teal white-text "><th>Transaction ID</th><th>Time</th><th>Account #</th><th>Type</th><th>Amount</th></tr>
            </thead>

          <tbody>
      
            
            {this.props.manu.map((i)=>{
                return this.myAccountD(i)
            })}
          </tbody>
        </table>
        <Modal myData={this.state.myIData}/>
      </div>
    )
  }
}
const getMyData=(store)=>{
  return {manu:store.transectionReducer}
  }
  export default connect(getMyData)(Transaction);