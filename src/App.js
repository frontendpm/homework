import './App.css';
import React from 'react';

import Header from "./containers/Header/Header";
import ProfileForm from "./containers/ProfileForm/ProfileForm";
import Profile from "./containers/Profile/Profile";


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/">
                    <ProfileForm />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
