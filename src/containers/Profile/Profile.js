
import Avatar from "@atlaskit/avatar";
import {Col, Container, Row} from "react-bootstrap";
import {PROFILE_FORM_CONFIG} from "../../utils/profileFormConfig";
import * as FIELD_TYPES from "../../utils/fieldTypes";
import {ROUTES_CONFIG} from "../../utils/routes";
import {Link} from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import {object} from "prop-types";
import styled from "styled-components";

const AvatarWrapper = styled.div`
    text-align: center;
    
    @media screen and (min-width: 768px) {
        text-align: right;
    }
`;

const DataItem = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
    
    dt {
        @media screen and (min-width: 768px) {
            width: 120px;
            min-width: 120px;
            text-align: right;
        }
    }
    
    dd {
        overflow-wrap: anywhere;
            
        @media screen and (min-width: 768px) {
            padding-left: 5px;
        }
    }
`;

const ErrorSection = styled.section`
    text-align: center;
    
    h2 {
        margin-bottom: 20px;
    }
    
    p {
        font-size: 1.5rem;
        margin: 0;
    }
`;

const Profile = ({formData}) => {
    const EmptyData = () => {
        return (<ErrorSection>
            <h2>Oops. You've got an error!</h2>
            <p>Sorry, it looks like you didn't fill the profile yet</p>
            <p>Go ahead and complete the form <Link to={ROUTES_CONFIG.EDIT_PROFILE.path}>here</Link></p>
        </ErrorSection>);
    };

    const DisplayProfilData = () => {
        return (
            <>
                <Row>
                    <Col md={2} lg={{span: 2, offset: 2}}>
                        <AvatarWrapper>
                            <Avatar
                                size="xlarge"
                                src={formData[PROFILE_FORM_CONFIG.filter(i => i.type === FIELD_TYPES.AVATAR)[0].name]}/>
                        </AvatarWrapper>
                    </Col>
                    <Col md={10} lg={6}>
                        <dl>
                            {PROFILE_FORM_CONFIG
                                .filter(i => i.type !== FIELD_TYPES.AVATAR && !!formData[i.name]).map(field => {
                                return <DataItem key={field.name}>
                                    <dt>{field.label}:</dt>
                                    <dd>{formData[field.name]}</dd>
                                </DataItem>
                            })}

                            <DataItem>
                                <dt/>
                                <dd>
                                    <Link
                                        to={ROUTES_CONFIG.EDIT_PROFILE.path}>{ROUTES_CONFIG.EDIT_PROFILE.anchor}</Link>
                                </dd>
                            </DataItem>
                        </dl>
                    </Col>
                </Row>
            </>
        );
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageTitle>
                        Profile Information
                    </PageTitle>
                </Col>
            </Row>
            <Row>
                <Col>
                    {Object.keys(formData).length ?
                        <DisplayProfilData/>
                        : <EmptyData/>
                    }
                </Col>
            </Row>
        </Container>
    );
};

Profile.propTypes = {
    formData: object.isRequired
};

export default Profile;