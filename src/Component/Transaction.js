import React from 'react';
import {connect} from 'react-redux';
import TransectionD from './TransectionD';

class Transaction extends React.Component {
  state={
    trnsData:''
  }
  changeData=(i)=>{
    this.setState({trnsData:i})
    var myModel=document.querySelector('.modal');
    myModel.style.display='block';
  }
  myAccountD=(i)=>{
    return <tr key={i.Tid} onClick={()=>this.changeData(i)}>
    <td>{i.Tid}</td>
              <td>{i.TimeD}</td>
              <td>{i.AccountId}</td>
              <td>{i.type}</td>
              <td>{i.Amount}</td>
              </tr>
     
  }
  render() {
    var myTableData;
    myTableData=this.props.manu.length<=0?<tr><td colSpan="5"><h1>Empty</h1></td></tr>:this.props.manu.map((i)=>{return this.myAccountD(i)})
    return (
      <div className="container">
      <h1 className="right">Transactions</h1>
        <table className="centered responsive-table"> 
          <thead>
          <tr className="teal white-text "><th>Transaction ID</th><th>Time</th><th>Account #</th><th>Type</th><th>Amount</th></tr>
            </thead>

          <tbody>
            {
              myTableData
            }
          </tbody>
        </table>
        <TransectionD myData={this.state.trnsData}/>
      </div>
    )
  }
}
const getMyData=(store)=>{
  return {manu:store.transectionReducer}
  }
  export default connect(getMyData)(Transaction);