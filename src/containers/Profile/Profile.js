import React, {useState} from "react";
import Avatar from "@atlaskit/avatar";
import {Col, Container, Row} from "react-bootstrap";


const Profile = ({formData}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Profile</h2>
                    {formData.avatar ? <Avatar src={formData.avatar}/> : ''}
                    {formData.firstname ? <h3>{formData.firstname}</h3> : ''}
                    {formData.lastname ? <h3>{formData.lastname}</h3> : ''}
                    {formData.email ? <h3>{formData.email}</h3> : ''}
                    {formData.birthday ? <h3>{formData.birthday}</h3> : ''}
                    {formData.phone ? <h3>{formData.phone}</h3> : ''}
                    {formData.about ? <h3>{formData.about}</h3> : ''}
                    {formData.lol}

                </Col>
            </Row>
        </Container>
    );
};

export default Profile;