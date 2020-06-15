import React, { useState } from "react";
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import NavigationBar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import Product from './components/product/Product';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

    return (
      <BrowserRouter>
      <div className="App">
        <NavigationBar username="JS7M" />
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/product' component={Product}/>
        <Route path='/signup' component={Dashboard}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
}

export default App;
