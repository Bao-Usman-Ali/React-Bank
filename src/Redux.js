import {createStore, combineReducers} from 'redux';
// let accountObj={
//     Name:'',
//     Id:'',
//     Date:'',
//     Type:'',
//     Balance:'',
//     Transections:[]
// }
let myAData;
let myData=localStorage.getItem('aData');
if(myData===null)
{
    myAData=''
}
else{
    myAData=JSON.parse(myData);
}
myData=localStorage.getItem('tData');
let myTData;
if(myData===null)
{
    myTData=''
}
else{
    myTData=JSON.parse(myData);
}
const accountReducer=(state=myAData,action)=>{
    switch(action.type)
    {
        case 'Add_Account':
        localStorage.setItem('aData',JSON.stringify([...state,action.payload]));
        return [...state,action.payload];
        default:
        return state;
    }
}
const transectionReducer=(state=myTData,action)=>{
    switch(action.type)
    {
        case 'Add_Transection':
        localStorage.setItem('tData',JSON.stringify([...state,action.payload]));
        return [...state,action.payload];
        default:
        return state;
    }
}
const myReducers=combineReducers({accountReducer,transectionReducer})
const store=createStore(myReducers);
export default store;
