import React from 'react';
import {connect} from 'react-redux';

class Deposite extends React.Component{

    CloseDModal=()=>{
        var myDData=document.querySelector('.DepositeModal')
        myDData.style.display='none';
    }
    sendDData=()=>{
        let transObj={
            Tid:'',
            TimeD:'',
            type:'',
            Amount:'',
            AccountId:'',
            Decr:'',
        }

        if(this.refs.myAmount.value!=='')
        {
            transObj.Amount=this.refs.myAmount.value;
        }
        else{
            alert("Amount required")
            return
        }
        if(transObj.Amount<=0)
        {
            alert("Amount must greater then 0")
            return
        }
        this.refs.myAmount.value="";
        const myDate=new Date();
        transObj.Tid=parseInt(Math.random()*66666666);
          transObj.TimeD=`${myDate.getHours()}:${myDate.getMinutes()}`;
          transObj.type='Debit';
          transObj.AccountId=this.props.myDData.Id;
          transObj.Decr=this.refs.Decription.value;
        this.props.dispatch({type:"Add_Transection",payload:transObj})
        let myNewObj={Id:this.props.myDData.Id,Amount:transObj.Amount,opt:true}
        this.props.dispatch({type:"update_Account",payload:myNewObj})
        this.CloseDModal()
    }
    render(){
        return(
            <div className="modal DepositeModal">
      <h4 className="grey card-panel darken-4 white-text center">Deposite</h4>
    <div className="modal-content">
    <div className="row">
    <div className="input-field col s12">
          <input id="myAmount" ref="myAmount" type="number" min='0' className="validate"/>
          <label htmlFor="myAmount">Amouunt</label>
        </div>
        <div className="input-field col s12">
          <input id="Decription" ref="Decription" type="text" className="validate"/>
          <label htmlFor="Decription">Decription (Optional)</label>
        </div>

    </div>
    </div>
    <div className="modal-footer">
      <button className="waves-effect waves-light blue btnA btn" onClick={()=>this.sendDData()}>Deposite</button>
      <button className="waves-effect waves-green red btnA btn" onClick={this.CloseDModal}>Cancel</button>
    </div>
  </div>
        )
    }
}
const getmyDData=(store)=>{
return {manu:store.accountReducer,Trans:store.transectionReducer}
}
export default connect(getmyDData)(Deposite);
