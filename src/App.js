import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Dashbord from './Component/Dashbord';
import Account from './Component/Account';
import Transection from './Component/Transection';
import AddAcc from './Component/AddAcc';
import ErrorPage from './Component/404';
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
        <Route path="/AddAcc"  component={AddAcc} />
        <Route path="/Account" component={Account} />
        <Route path="/Transection" component={Transection} />
        <Route path="/" exact component={Dashbord}/>
        <Route path="" component={ErrorPage}/>
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