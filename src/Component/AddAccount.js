import React from 'react';
import {connect} from 'react-redux'


class AddAccount extends React.Component {
      AddBtnF=()=>{
        let accountObj={
            Name:'',
            Id:'',
            Date:'',
            Type:'',
            Balance:'',
        }
        let transObj={
            Tid:'',
            TimeD:'',
            type:'',
            Amount:'',
            AccountId:''
        }
          accountObj.Name=this.refs.FirstName.value;
          accountObj.Type=this.refs.Acc_Type.value;
          accountObj.Balance=this.refs.Amount_here.value;
          const myDate=new Date();
          accountObj.Date=myDate;
          accountObj.Id=parseInt(Math.random()*66666666);
          transObj.Tid=parseInt(Math.random()*66666666);
          transObj.TimeD=`${myDate.getHours()}:${myDate.getMinutes()}`;
          transObj.type='Debit';
          transObj.Amount=accountObj.Balance;
          transObj.AccountId=accountObj.Id;
          this.props.dispatch({type:"Add_Account",payload:accountObj})
          this.props.dispatch({type:"Add_Transection",payload:transObj})
         
        // console.log(this.props);
            
      }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card-panel teal">
                            <h2 className="white-text center">
                                Enter Account detail here
                        </h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="input-field col s12 m8 offset-m2">
                                    <input id="first_name" ref="FirstName"  type="text" className="validate" />
                                    <label htmlFor="first_name">Full Name</label>
                                </div>
                                <div className="input-field col s12 m8 offset-m2">
                                <select className="browser-default" ref="Acc_Type">
                                    <option value=""  defaultValue>Select your Account Type</option>
                                    <option value="Current">Current</option>
                                    <option value="Svings">Saving</option>
                                </select>
                                </div>
                                <div className="input-field col s12 m8 offset-m2">
                                    <input id="Amount_here" ref="Amount_here" type="number"  className="validate" />
                                    <label htmlFor="Amount_here">Amount</label>
                                </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s12 m4 offset-m2 btn_my">
                            <button className="btn green" onClick={()=>{this.AddBtnF()}}>Create Account</button>
                            </div>
                            <div className="input-field col s12 m4 btn_my">
                            <button className="btn red">Cancel</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const getMyData=(store)=>{
return {manu:store.accountReducer,Trans:store.transectionReducer}
}
export default connect(getMyData)(AddAccount);