import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import Form, {FormFooter} from "@atlaskit/form";
import ButtonGroup from "@atlaskit/button/button-group";
import Button from "@atlaskit/button/standard-button";
import {PROFILE_FORM_CONFIG} from "../../utils/profileFormConfig";
import * as FIELD_TYPES from "../../utils/fieldTypes";
import Text from "../../components/Fields/Text";
import Textarea from "../../components/Fields/Textarea";
import Datepicker from "../../components/Fields/Datepicker";
import Avatarpicker from "../../components/Fields/Avatarpicker";
import PageTitle from "../../components/PageTitle/PageTitle";
import {object, func} from "prop-types";

const ProfileForm = ({formData, saveFormData, history}) => {
    const [imagePreviewSourceViaDataURIAPI, setImagePreviewSourceViaDataURIAPI] = useState(formData.avatar || '');

    const validateOnSubmit = (data) => requiredValidator(data, 'birthday');

    const resetForm = () => {
        saveFormData({});
        setImagePreviewSourceViaDataURIAPI('');
    };

    const requiredValidator = (data, key) => {
        if (!data[key]) {
            return {
                [key]: `no ${key} value selected, please select a value.`,
            };
        }

        return {};
    };

    const formSubmit = (data) => {
        const errors = validateOnSubmit(data);

        if (!Object.keys(errors).length) {
            history.push("/profile");
            saveFormData(data);
        }

        return errors;
    };

    const formChildren = () => PROFILE_FORM_CONFIG.map(field => {
        switch (field.type) {
            case FIELD_TYPES.TEXTAREA:
                return <Textarea
                    key={field.name}
                    field={field}
                    defaultValue={formData[field.name] || ""}
                    validate
                />;
            case FIELD_TYPES.DATEPICKER:
                return <Datepicker
                    key={field.name}
                    field={field}
                    defaultValue={formData[field.name] || ""}
                />;
            case FIELD_TYPES.AVATAR:
                return <Avatarpicker
                    key={field.name}
                    field={field}
                    defaultValue={imagePreviewSourceViaDataURIAPI || ""}
                    setUri={setImagePreviewSourceViaDataURIAPI}
                />;
            default:
                return <Text
                    key={field.name}
                    field={field}
                    defaultValue={formData[field.name] || ""}
                />;
        }
    });

    return (
        <Container>
            <Row>
                <Col>
                    <PageTitle>
                        Edit Profile Information
                    </PageTitle>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Form
                        onSubmit={formSubmit}>
                        {({formProps}) => (
                            <form {...formProps}>
                                {formChildren()}
                                <FormFooter>
                                    <ButtonGroup>
                                        <Button
                                            appearance="subtle"
                                            onClick={resetForm}>
                                            Reset
                                        </Button>
                                        <Button
                                            type="submit"
                                            appearance="primary"
                                        >
                                            Sign up
                                        </Button>
                                    </ButtonGroup>
                                </FormFooter>
                            </form>
                        )}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

ProfileForm.propTypes = {
    formData: object.isRequired,
    saveFormData: func.isRequired,
    history: object.isRequired
};

export default withRouter(ProfileForm);