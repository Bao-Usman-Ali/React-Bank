import React, { Component } from 'react';
class Withdraw extends Component{
    closeWithdraw=()=>{
        this.closeWithdraw=()=>{
            document.querySelector('.withdrawModal').style.display="none";
                }
    }
    render(){
        return(
        
           
            
          <div className="container">
          <div className="modal withdrawModal">
          <div className="modal-header">
          <h3 className="center teal white-text">
         Withdraw from Account 
          </h3>
          <div className="modal-content">
          <div className="container">
          <div className="row">
<div className="col s2">
<span>Ammount to withdraw</span>
</div>
<div className="col s10">
<input type="text" placeholder="Maximum Rs:1000"/>
</div>
</div>
<div className="row">
<div className="col s2">
<span>Description  (optional)</span>
</div>
<div className="col s10">
<input type="number" placeholder="Description of transaction"/>
</div>
</div>
<div className="modal-footer">
<div className="row">
<div className="col s10">
<button className="btn waves-effect waves-light purple lighten-2 black-text">Withdraw</button>
</div>
<div className="col s2">
<button className="btn waves-effect waves-light green lighten-2 black-text"onClick={()=>this.closeWithdraw()}>Cancel</button>
</div>
</div>
</div>
          
          </div>
          
          </div>
          </div>
          </div>
          </div>

        
        );
    }
}
export default Withdraw;
