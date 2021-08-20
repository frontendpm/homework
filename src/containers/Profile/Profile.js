import PropTypes from 'prop-types'

import Avatar from "@atlaskit/avatar";
import {Col, Container, Row} from "react-bootstrap";
import {PROFILE_FORM_CONFIG} from "../../utils/ProfileFormConfig";
import * as FIELD_TYPES from "../../utils/FieldTypes";
import {ROUTES_CONFIG} from "../../utils/routes";
import {Link} from "react-router-dom";

const EmptyData = () => {
    return (<div>
        <p>Sorry, it looks like you didn't fill the profile yet</p>
        <p>Go ahead and complete the form <Link to={ROUTES_CONFIG.EDIT_PROFILE.path}>here</Link></p>
    </div>);
};
const Profile = ({formData}) => {
    return (
        <Container>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <h2>Profile</h2>
                    {Object.keys(formData).length ? PROFILE_FORM_CONFIG.map(field => {
                            if (field.type === FIELD_TYPES.AVATAR) {
                                return <Avatar key={field.name} size="xlarge" src={formData[field.name]}/>
                            } else {
                                return <h3 key={field.name}>{formData[field.name]}</h3>
                            }
                        })
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