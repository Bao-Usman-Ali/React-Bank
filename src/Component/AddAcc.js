import React from 'react';
import {connect} from 'react-redux';

class AddAcc extends React.Component {
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
            AccountId:'',
            Decr:'',
        }
        if(this.refs.FirstName.value!=='')
        {
            accountObj.Name=this.refs.FirstName.value;
        }
        else{
            alert("All fields required")
            return
        }
        if(this.refs.Acc_Type.value!=='')
        {
            accountObj.Type=this.refs.Acc_Type.value;
        }
        else{
            alert("All fields required")
            return
        }
        if(this.refs.Amount_here.value!=='')
        {
          accountObj.Balance=this.refs.Amount_here.value;
        }
        else{
            alert("All fields required")
            return
        }
          const myDate=new Date();
          accountObj.Date=myDate;
          accountObj.Id=parseInt(Math.random()*66666666);
          transObj.Tid=parseInt(Math.random()*66666666);
          transObj.TimeD=`${myDate.getHours()}:${myDate.getMinutes()}`;
          transObj.type='Debit';
          transObj.Amount=accountObj.Balance;
          transObj.AccountId=accountObj.Id;
          transObj.Decr='Initial Deposit';
          this.props.dispatch({type:"Add_Transection",payload:transObj})
          this.props.dispatch({type:"Add_Account",payload:accountObj})
            
      }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 white">
                        <div className="card-panel teal ">
                            <h2 className="white-text center">
                                Enter Account detail here
                        </h2>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="input-field col s12 m8 offset-m2">
                                    <input id="first_name" ref="FirstName" defaultValue="usman ali" required type="text" className="validate" />
                                    <label htmlFor="first_name">Full Name</label>
                                </div>
                                <div className="input-field col s12 m8 offset-m2">
                                <select className="browser-default" ref="Acc_Type">
                                    <option value="" disabled defaultValue>Account type</option>
                                    <option value="Current">Current</option>
                                    <option value="Saving">Saving</option>
                                </select>
                                </div>
                                <div className="input-field col s12 m8 offset-m2">
                                    <input id="Amount_here" ref="Amount_here" type="text" defaultValue="2000" className="validate" />
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
export default connect(getMyData)(AddAcc);