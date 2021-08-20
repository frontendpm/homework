import './App.css';
import React, {useState, useEffect} from 'react';

import Spinner from "@atlaskit/spinner";
import Header from "./containers/Header/Header";
import ProfileForm from "./containers/ProfileForm/ProfileForm";
import Profile from "./containers/Profile/Profile";
import {getParsedDataFromSessionStorage, saveDataToSessionStorage} from "./utils/sessionStorageHandler";
import styled from "styled-components";


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async () => {
        // const data = await getDataFromExternalApi(userId) // userId - needs to be provided to recognize the user
        const data = await getParsedDataFromSessionStorage('formData');
        setFormData(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const saveFormData = (data) => {
        // await saveDataToExternalApi(data, userId) // userId - needs to be provided to recognize the user
        saveDataToSessionStorage('formData', data);
        setFormData(data);
    };

    const SpinnerWrapper = styled.div`
        height: 60vh;
        min-height: 350px;
        display: flex;
        align-items:center;
        justify-content: center;
    `;

    const MainStyled = styled.main`
        margin-top: 80px;
        margin-bottom: 80px;
        
        @media screen and (max-width: 768px) {
            margin-top: 40px;
            margin-bottom: 40px;
        }
    `;

    return (
        <Router>
            <Header/>
            <MainStyled>
            {isLoading ? <SpinnerWrapper>
                    <Spinner size="xlarge"/>
                </SpinnerWrapper> :
                <Switch>
                    <Route path="/profile">
                        <Profile formData={formData}/>
                    </Route>
                    <Route path="/">
                        <ProfileForm formData={formData} saveFormData={saveFormData}/>
                    </Route>
                </Switch>
            }
            </MainStyled>
        </Router>
    );
}

export default App;
