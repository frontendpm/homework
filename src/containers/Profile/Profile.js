import PropTypes from 'prop-types'

import Avatar from "@atlaskit/avatar";
import {Col, Container, Row} from "react-bootstrap";
import {PROFILE_FORM_CONFIG} from "../../utils/ProfileFormConfig";
import * as FIELD_TYPES from "../../utils/FieldTypes";
import {ROUTES_CONFIG} from "../../utils/routes";
import {Link, NavLink} from "react-router-dom";
import PageHeader from "@atlaskit/page-header";
import {Fragment} from "react";
import styled from "styled-components";

const EmptyData = () => {
    return (<div>
        <p>Sorry, it looks like you didn't fill the profile yet</p>
        <p>Go ahead and complete the form <Link to={ROUTES_CONFIG.EDIT_PROFILE.path}>here</Link></p>
    </div>);
};

const DataItem = styled.div`
    display: flex;
    flex-wrap: nowrap;
    
    dt {
        width: 120px;
        min-width: 120px;
        text-align: right;
    }
    
    dd {
        padding-left: 5px;
        overflow-wrap: anywhere;
    }
`;

const Profile = ({formData}) => {

    const DisplayProfilData = () => {
        return (
            <>
                <Row>
                    <Col md={5} lg={3}>
                        <Avatar size="xlarge"
                                src={formData[PROFILE_FORM_CONFIG.filter(i => i.type === FIELD_TYPES.AVATAR)[0].name]}/>
                    </Col>
                    <Col md={7} lg={9}>
                        <dl>
                            {PROFILE_FORM_CONFIG.filter(i => i.type !== FIELD_TYPES.AVATAR && !!formData[i.name]).map(field => {
                                return <DataItem key={field.name}>
                                    <dt>{field.label}:</dt>
                                    <dd>{formData[field.name]}</dd>
                                </DataItem>
                            })
                            }

                            <DataItem>
                                <dt></dt>
                                <dd>
                                    <Link
                                        to={ROUTES_CONFIG.EDIT_PROFILE.path}>{ROUTES_CONFIG.EDIT_PROFILE.anchor}</Link></dd>
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
                    <PageHeader>
                        Profile Information
                    </PageHeader>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    {Object.keys(formData).length ? <DisplayProfilData/>
                        : <EmptyData/>
                    }

                </Col>
            </Row>
        </Container>
    );
};

Profile.propTypes = {
    formData: PropTypes.object.isRequired
};

export default Profile;