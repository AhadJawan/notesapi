import React, { Component } from 'react';
import './Name.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Name() {
    return (
        <div className="wrapper">
            <div className="jsd">
                <nav>
                    <div className="menu-icon">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="logo">
                        J<img src="smile.png" />U

                    </div>
                    <div className="menu">
                        <ul>
                            <Router>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/aboutus">Aboutus</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                            </Router>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>


    );
}
export default Name;