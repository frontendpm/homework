import './App.css';
import React, {useState, useEffect} from 'react';

import Header from "./containers/Header/Header";
import ProfileForm from "./containers/ProfileForm/ProfileForm";
import Profile from "./containers/Profile/Profile";
import {getParsedDataFromSessionStorage, saveDataToSessionStorage} from "./utils/sessionStorageHandler";


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [formData, setFormData] = useState(JSON.parse(window.sessionStorage.getItem('formData')) || {});

    useEffect(() => {
        const fetchData = async () => {
            // const data = await getDataFromExternalApi(userId) // userId - needs to be provided to recognize the user
            const data = await getParsedDataFromSessionStorage('formData');
            setFormData(data);
        };

        fetchData();
    }, []);

    const saveFormData = (data) => {
        // await saveDataToExternalApi(data, userId) // userId - needs to be provided to recognize the user
        saveDataToSessionStorage('formData', data);
        setFormData(data);
    };

    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/profile">
                    <Profile formData={formData} />
                </Route>
                <Route path="/">
                    <ProfileForm formData={formData} saveFormData={saveFormData} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
