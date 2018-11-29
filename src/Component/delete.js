import React, { Component } from 'react';
import Withdraw from './withdraw';
import Deposite from './deposite';
class Delete extends Component{
    close=()=>{
        document.querySelector('.modalDel').style.display="none";
    }
    withdrawModal=()=>{
        document.querySelector('.withdrawModal').style.display='block';
    }
    deposite=()=>{
        document.querySelector('.deposite').style.display="block";
    }

    render(){
        return(
          
        
        <div className="container">
            <div className="modal modal-fixed-footer modalDel" id="modal2">
                  <div className=" modal-header teal">
                   <div className="row">
                   <div className="col s9">
                   <button className="btn waves-effect waves-light white-text red" onClick={()=>this.close()}>Close</button>
                   </div>
                   <div className="col s3">
                   <button className="btn black waves-effect waves-light white-text">Delete Account</button>
                   </div>
                   </div>
                   <div className="row">
                   <div className="col s12">
                   <h3 className="center  white-text">Account Details</h3>
                   </div>
                   </div>
                  </div>
                  <div className="modal-content">
            <table>
              <tbody>
             <tr>
                 <th scope="row">Account#</th>
                 <td>{this.props.myAcc.Id}</td>
                 
             </tr>
             <tr>
                 <th scope="row">Name</th>
                 <td>{this.props.myAcc.Name}</td>
             </tr>
             <tr>
                 <th scope="row">Registered</th>
                 <td>{this.props.myAcc.Date}</td>
             </tr>
             <tr>
                 <th scope="row">Account Type</th>
                 <td>{this.props.myAcc.Type}</td>
             </tr>
             <tr>
                 <th scope="row">Current Balance</th>
                 <td>{this.props.myAcc.Balance}</td>
                 
             </tr>
            
             </tbody>
             
          </table>
          </div>
          <div className="modal-footer">
          <div className="row">
          <div className="col s3 right">
          <button className="black white-text  waves-effect waves-light " onClick={()=>this.withdrawModal()}>Withdraw</button>
          </div>
          <div className="col s9 ">
          <button className="black white-text waves-effect waves-light" onClick={()=>this.deposite()}>Deposite</button>
          </div>
          </div>
    </div>
          </div>
          <Withdraw/>
        <Deposite/>
          </div>

    
        );
    }
}
export default Delete;
