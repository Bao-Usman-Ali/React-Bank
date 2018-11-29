import React from 'react';
import { connect } from 'react-redux';
import WithDraw from './withdraw';
import Deposite from './Deposit';

class AccountD extends React.Component {
    state = {
        accountId: ''
    }
    closeModel = () => {
        var myModel = document.querySelector('.accountModal');
        myModel.style.display = 'none';
    }
    WithDrawOpen = (i) => {
        this.setState({ accountId: i })
        document.querySelector('.withDrawModal').style.display = 'block';
    }
    DepositeOpen = (i) => {
        this.setState({ accountId: i })
        document.querySelector('.DepositeModal').style.display = 'block';
    }
    deleteAccount = (i) => {
        this.props.dispatch({ type: "delete", payload: i })
        this.closeModel();
    }
    render() {
        return (
            <div className="modal accountModal">
                <a href="#!" className="waves-effect waves-light btn btnA cyan accent-4" onClick={this.closeModel}>Close</a>
                <div className="modal-content">
                    <h4>Account Details</h4>
                    <button className="red btn dFlex" onClick={() => this.deleteAccount(this.props.data.Id)}>
                        Delete Account
                            </button>
                    <table >
                        <tbody>
                            <tr>
                                <th>
                                    Account #
                                </th>
                                <td>
                                    {this.props.data.Id}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Full Name
                                </th>
                                <td>
                                    {this.props.data.Name}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Registered
                                </th>
                                <td>
                                    {this.props.data.Date}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Account Type
                                </th>
                                <td>
                                    {this.props.data.Type}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Current Balance
                                </th>
                                <td>
                                    {this.props.data.Balance}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button className="btn waves-effect waves-light btnA green" onClick={() => { this.DepositeOpen(this.props.data) }}>
                        DEPOSIT
                                    </button>
                    <button className="btn waves-effect waves-light btnA red" onClick={() => { this.WithDrawOpen(this.props.data) }}>
                        WITHDRAW
                            </button>
                </div>
                <WithDraw myData={this.state.accountId} />
                <Deposite myDData={this.state.accountId} />
            </div>
        )
    }
}
const getMyData = (store) => {
    return { manu: store.accountReducer, Trans: store.transectionReducer }
}
export default connect(getMyData)(AccountD);