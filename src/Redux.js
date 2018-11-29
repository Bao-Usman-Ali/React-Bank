import { createStore, combineReducers } from 'redux';
let myAData;
let myData = localStorage.getItem('aData');
if (myData === null) {
    myAData = ''
}
else {
    myAData = JSON.parse(myData);
}
myData = localStorage.getItem('tData');
let myTData;
if (myData === null) {
    myTData = ''
}
else {
    myTData = JSON.parse(myData);
}
const accountReducer = (state = myAData, action) => {
    switch (action.type) {
        case 'Add_Account':
            localStorage.setItem('aData', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
        case 'update_Account':
            var myData = state.map((i) => {
                if (i.Id === action.payload.Id) {
                    if (action.payload.opt === false) {
                        i.Balance = Math.abs(i.Balance) - Math.abs(action.payload.Amount)
                    }
                    else {
                        i.Balance = Math.abs(i.Balance) + Math.abs(action.payload.Amount)
                    }
                }
                return i;
            })
            localStorage.setItem('aData', JSON.stringify([...myData]));
            return [...myData];
        case 'delete':
        let dIndex;
        for(let x=0;x<state.length;x++)
        {
            if(state[x].Id===action.payload)
            {
                dIndex=x;
            }
        }
        state.splice(dIndex,1);
        localStorage.setItem('aData', JSON.stringify(state));
        return state;
        default:
            return state;
    }
}
const transectionReducer = (state = myTData, action) => {
    switch (action.type) {
        case 'Add_Transection':
            localStorage.setItem('tData', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
            case 'delete':
            let indexArray=[];
            let myData=[...state];
            for(let x=0;x<myData.length;x++)
            {
                if(myData[x].AccountId===action.payload)
                {
                    indexArray.push(x);
                }
            }
            console.log(indexArray);
            
            if(indexArray.length>0)
            {
                for(let x=0;x<indexArray.length;x++)
                {
                    myData.splice(indexArray[x]-x,1); 
                }
            }
            localStorage.setItem('tData', JSON.stringify([...myData]));
            return [...myData];

        default:
            return state;
    }
}
const myReducers = combineReducers({ accountReducer, transectionReducer })
const store = createStore(myReducers);
export default store;
