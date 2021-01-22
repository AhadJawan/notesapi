import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Aboutus from "./Aboutus.js";
import Profile from "./Prfile.js";


function Body() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/aboutus" component={Aboutus} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </div>
    );
}

export default Body;
