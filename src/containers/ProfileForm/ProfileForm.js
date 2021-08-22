import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Form, {FormFooter} from "@atlaskit/form";
import ButtonGroup from "@atlaskit/button/button-group";
import PageHeader from '@atlaskit/page-header';
import Button from "@atlaskit/button/standard-button";
import {PROFILE_FORM_CONFIG} from "../../utils/profileFormConfig";
import * as FIELD_TYPES from "../../utils/fieldTypes";
import Text from "../../components/Fields/Text";
import Textarea from "../../components/Fields/Textarea";
import Datepicker from "../../components/Fields/Datepicker";
import Avatarpicker from "../../components/Fields/Avatarpicker";

const ProfileForm = ({formData, saveFormData, history}) => {
    const [imagePreviewSourceViaDataURIAPI, setImagePreviewSourceViaDataURIAPI] = useState(formData.avatar || '');

    const validateOnSubmit = (data) => {
        let errors = {};
        errors = requiredValidator(data, 'birthday', errors);
        return errors;
    };

    const requiredValidator = (data, key, errors) => {
        if (!data[key]) {
            return {
                ...errors,
                [key]: `no ${key} value selected, please select a value.`,
            };
        }

        return errors;
    };

    const formSubmit = (data) => {
        const errors = validateOnSubmit(data);

        console.log('errors:',errors);

        if (Object.keys(errors).length) {
            console.log("errors");
        } else {
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
                    <PageHeader>
                        Edit Profile Information
                    </PageHeader>
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
                                            onClick={() => {
                                                saveFormData({});
                                                setImagePreviewSourceViaDataURIAPI('');
                                            }}>
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

export default withRouter(ProfileForm);