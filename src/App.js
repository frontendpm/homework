import React, {useState, useEffect} from 'react';

import Spinner from "@atlaskit/spinner";
import {AutoDismissFlag, FlagGroup} from '@atlaskit/flag';
import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
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
    const [flags, setFlags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // const data = await getDataFromExternalApi(userId) // userId - needs to be provided to recognize the user
            const data = await getParsedDataFromSessionStorage('formData');
            setFormData(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const saveFormData = (data) => {
        // await saveDataToExternalApi(data, userId) // userId - needs to be provided to recognize the user
        saveDataToSessionStorage('formData', data);
        setFormData(data);
        addFlag();
    };

    const addFlag = () => {
        const newFlagId = flags.length + 1;
        const newFlags = flags.slice();
        newFlags.splice(0, 0, newFlagId);

        setFlags(newFlags);
    };

    const handleDismiss = () => {
        setFlags(flags.slice(1));
    };

    const SpinnerWrapper = styled.div`
        height: 60vh;
        min-height: 350px;
        display: flex;
        align-items:center;
        justify-content: center;
    `;

    const MainStyled = styled.main`
        margin-bottom: 80px;
        
        @media screen and (max-width: 768px) {
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
                        <Route exact path="/">
                            <ProfileForm formData={formData} saveFormData={saveFormData} />
                        </Route>
                    </Switch>
                }
            </MainStyled>
            <FlagGroup onDismissed={handleDismiss}>
                {flags.map((flagId) => {
                    return (
                        <AutoDismissFlag
                            appearance="success"
                            id={flagId}
                            icon={<SuccessIcon label="Success" secondaryColor="#00875A"/>}
                            key={flagId}
                            title="Success! All your data are saved."
                        />
                    );
                })}
            </FlagGroup>
            <Footer/>
        </Router>
    );
}

export default App;
