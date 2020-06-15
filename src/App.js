import React, { useState } from "react";
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import NavigationBar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

    return (
      <BrowserRouter>
      <div className="App">
        <NavigationBar username="name" />
      <Switch>
        <Route path='/' component={Dashboard}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
}

export default App;
