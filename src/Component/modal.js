import React, { Component } from 'react';
class Modal extends Component{
    closeModal=()=>{
 document.querySelector('.transaction').style.display="none";
    }
    render(){
        console.log(this.props.myData);
        
        return(
            <div className="container">
            <div className="modal modal-fixed-footer transaction" id="modal1">
            <div className="modal-header teal">
            <h2 className="center white-text ">Transaction Details</h2>
            <div className="modal-content">
            <table>
                <tbody>
                    <tr>
                        <th>
                            Account ID
                        </th>
                        <td>
                        {this.props.myData.AccountId}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Time
                        </th>
                        <td>
                        {this.props.myData.TimeD}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Account#
                        </th>
                        <td>
                        {this.props.myData.AccountId}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Type
                        </th>
                        <td>
                        {this.props.myData.type}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Ammount
                        </th>
                        <td>
                        {this.props.myData.Amount}
                        </td>
                    </tr>
                    
                </tbody>
            </table>

            
            </div>
            <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect  red black-text waves-light btn-flat" onClick={()=>this.closeModal()}>close</a>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
export default Modal;