import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Form, {FormFooter} from "@atlaskit/form";
import ButtonGroup from "@atlaskit/button/button-group";
import Button from "@atlaskit/button/standard-button";
import LoadingButton from "@atlaskit/button/loading-button";
import {PROFILE_FORM_CONFIG} from "../../utils/ProfileFormConfig";
import * as FIELD_TYPES from "../../utils/FieldTypes";
import Text from "../../components/Fields/Text";
import Textarea from "../../components/Fields/Textarea";
import Datepicker from "../../components/Fields/Datepicker";
import Avatarpicker from "../../components/Fields/Avatarpicker";

const ProfileForm = ({formData, saveFormData}) => {
    const [imagePreviewSourceViaDataURIAPI, setImagePreviewSourceViaDataURIAPI] = useState(formData.avatar || '');

    const validateOnSubmit = (data) => {
        let errors;
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
        saveFormData(data);
        return validateOnSubmit(data);
    };

    const formChildren = () => PROFILE_FORM_CONFIG.map(field => {
        if (field.type === FIELD_TYPES.TEXTAREA) {
            return <Textarea
                key={field.name}
                field={field}
                defaultValue={formData[field.name] || ""}
            />
        } else if (field.type === FIELD_TYPES.DATEPICKER) {
            return <Datepicker
                key={field.name}
                field={field}
                defaultValue={formData[field.name] || ""}
            />
        }
        if (field.type === FIELD_TYPES.AVATAR) {
            return <Avatarpicker
                key={field.name}
                field={field}
                defaultValue={imagePreviewSourceViaDataURIAPI || ""}
                setUri={setImagePreviewSourceViaDataURIAPI}
            />
        } else {
            return <Text
                key={field.name}
                field={field}
                defaultValue={formData[field.name] || ""}
            />
        }
    });

    return (
        <Container>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Form
                        onSubmit={formSubmit}>
                        {({formProps, submitting}) => (
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
                                        <LoadingButton
                                            type="submit"
                                            appearance="primary"
                                            isLoading={submitting}
                                        >
                                            Sign up
                                        </LoadingButton>
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

export default ProfileForm;