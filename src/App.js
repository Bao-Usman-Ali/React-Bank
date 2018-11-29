import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Dashboard from './Component/Dashboard';
import Account from './Component/Account';
import Transaction from './Component/Transaction';
import AddAccount from './Component/AddAccount';

// import AccountD from './Component/AccountD';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from './Redux'
import {Provider} from 'react-redux'

import './App.css';
import './skeleton.css';


class App extends React.Component {
  render() {
    return (
       
      <BrowserRouter>
          
    <div>
    <Header />
    <div className="container">
    
    <Provider store={store}>
      <Switch>
      
        <Route path="/AddAccount"  component={AddAccount} />
        <Route path="/Account" component={Account} />
        <Route path="/Transaction" component={Transaction} />
        <Route path="/" exact component={Dashboard}/>
        </Switch>
        </Provider>
        </div>
        <Footer />
    </div>
      
      </BrowserRouter>
     
    )
  }

}
export default App;