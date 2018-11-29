import React, { Component } from 'react';
class Deposite extends Component{
    closeDeposite=()=>{
document.querySelector('.deposite').style.display="none";
    }
    render(){
        return(
            <div className="container">
          <div className="modal deposite ">
          <div className="modal-header">
          <h3 className="center teal white-text">
         Deposite into Account
          </h3>
          <div className="modal-content">
          <div className="container">
          <div className="row">
<div className="col s2">
<span>Ammount to deposite</span>
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
<input type="text" placeholder="Description of transaction"/>
</div>
</div>
<div className="modal-footer">
<div className="row">
<div className="col s10">
<button className="btn waves-effect waves-light purple black-text">deposite</button>
</div>
<div className="col s2">
<button className="btn waves-effect waves-light green black-text" onClick={()=>this.closeDeposite()} >Cancel</button>
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
export default Deposite;