import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import Delete from './delete';
class Account extends React.Component {
  state={
    myAccount:''
  }
  stateChange=(i)=>{
    this.setState({myAccount:i})
    document.querySelector('.modal').style.display='block';
      }
  myAccountD=(i)=>{
    return <tr key={i.Id}>
    <td href="#modal2"  onClick={()=>{this.stateChange(i)}}>{i.Id}</td>
              <td>{i.Name}</td>
              <td>{i.Date}</td>
              <td>{i.Type}</td>
              <td>{i.Balance}</td>
              </tr>
     
  }
  render() {
    return (
      <div className="container">
      <br/>
      <div className="teal">
      <div className="row" >
      <div className="col s6">
      
      <Link to="/"> <button className="btn black white-text">back to dashboard</button></Link>
      </div>
      <div className="col s6">
      
     <Link to="/AddAccount"> <button className="btn black right white-text">Create New Account</button></Link>
      </div>
        
      </div>
      <div className="row" >
      <div className="col s12">
      
      <h3 className="center white-text"><i className="fa fa-user prefix "></i> Accounts</h3>
      <hr/>
      </div>
        
      </div>
      </div>
      
        <table className="centered responsive-table">
          
          <thead> 
            <tr className="teal white-text"><th>Account #</th><th>Name</th><th>Registered</th><th>Account Type</th><th>Balance</th></tr>
          </thead>
          <tbody>
            
            {this.props.manu.map((i)=>{
              return this.myAccountD(i);
            })}
          </tbody>
        </table>
        <Delete myAcc={this.state.myAccount}/>
      </div>
    )
  }
}
const getMyData=(store)=>{
  return {manu:store.accountReducer}
  }
  export default connect(getMyData)(Account);