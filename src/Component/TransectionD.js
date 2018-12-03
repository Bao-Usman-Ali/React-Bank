import React from 'react';

class TransectionD extends React.Component{
  closeModel=()=>{
    var myModel=document.querySelector('.modal');
    myModel.style.display='none';
  }
render(){
    return(
        <div className="modal">
        <div className="modal-content">
          <h4 className="center">Transaction Details</h4>
          <table className="responsive-table">
            <tbody>
            <tr>
              <th>
              Transaction ID
              </th>
              <td>
              {this.props.myData.Tid}
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
              Account #
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
              Amount
              </th>
              <td>
              {this.props.myData.Amount}
              </td>
            </tr>
            <tr>
              <th>
              Description
              </th>
              <td>
              {this.props.myData.Decr}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <a href="#!" className="waves-effect waves-green btn cyan accent-4" onClick={this.closeModel}>Close</a>
        </div>
      </div>
    )
}
}

export default TransectionD;