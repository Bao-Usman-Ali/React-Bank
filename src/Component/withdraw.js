import React from 'react';
import {connect} from 'react-redux';

class WithDraw extends React.Component{

    CloseWModal=()=>{
        var myData=document.querySelector('.withDrawModal')
        myData.style.display='none';
    }
    sendData=()=>{
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
        if(transObj.Amount<=0||transObj.Amount>this.props.myData.Balance)
        {
            alert("Amount must greater then 0 and less then"+this.props.myData.Balance)
            return
        }
        this.refs.myAmount.value="";
        const myDate=new Date();
        transObj.Tid=parseInt(Math.random()*66666666);
          transObj.TimeD=`${myDate.getHours()}:${myDate.getMinutes()}`;
          transObj.type='Credit';
          transObj.AccountId=this.props.myData.Id;
          transObj.Decr=this.refs.Decription.value;
        this.props.dispatch({type:"Add_Transection",payload:transObj})
        let myNewObj={Id:this.props.myData.Id,Amount:transObj.Amount,opt:false}
        this.props.dispatch({type:"update_Account",payload:myNewObj})
        this.CloseWModal()
    }
    render(){
        return(
            <div className="modal withDrawModal">
      <h4 className="teal card-panel white-text center">WithDraw</h4>
    <div className="modal-content">
    <div className="row">
    <div className="input-field col s12">
          <input id="myAmount" ref="myAmount" type="number" min='0' max={this.props.myData.Balance} className="validate"/>
          <label htmlFor="myAmount">Amouunt</label>
        </div>
        <div className="input-field col s12">
          <input id="Decription" ref="Decription" type="text" className="validate"/>
          <label htmlFor="Decription">Decription (Optional)</label>
        </div>
    <div className="teal btn  col s12">Max Amount.<b className="black-text"> {this.props.myData.Balance} Rs</b></div>

    </div>
    </div>
    <div className="modal-footer">
      <button className="waves-effect waves-light blue btnA btn" onClick={()=>this.sendData()}>WithDraw</button>
      <button className="waves-effect waves-green red btnA btn" onClick={this.CloseWModal}>Cancel</button>
    </div>
  </div>
        )
    }
}
const getMyData=(store)=>{
return {manu:store.accountReducer,Trans:store.transectionReducer}
}
export default connect(getMyData)(WithDraw);