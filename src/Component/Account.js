import React from 'react';
import { connect } from 'react-redux';
import AccountD from './AccountD';


class Account extends React.Component {
  state = {
    myData: ''
  }
  clickDataChange = (i) => {
    this.setState({ myData: i })
    var myModel = document.querySelector('.accountModal');
    myModel.style.display = 'block';
  }
  myAccountD = (i) => {
    return <tr key={i.Id} onClick={() => { this.clickDataChange(i) }}>
      <td>{i.Id}</td>
      <td>{i.Name}</td>
      <td>{i.Date.toString()}</td>
      <td>{i.Type}</td>
      <td>{i.Balance}</td>
    </tr>
  }
  render() {
    var myTableData;
    myTableData = this.props.manu.length <= 0 ? <tr><td colSpan="5"><h1>Empty</h1></td></tr> : this.props.manu.map((i) => { return this.myAccountD(i); })
    return (
      <div className="container">
      
      <h1 className='right'> 
        Accounts
      </h1>
        <table className="centered responsive-table">
          <thead>
            <tr className="teal white-text "><th>Account #</th><th>Name</th><th>Registered</th><th>Account Type</th><th>Balance</th></tr>
          </thead>

          <tbody>

            {myTableData}
          </tbody>
        </table>
        <AccountD data={this.state.myData} />
      </div>
    )
  }
}
const getMyData = (store) => {
  return { manu: store.accountReducer }
}
export default connect(getMyData)(Account);