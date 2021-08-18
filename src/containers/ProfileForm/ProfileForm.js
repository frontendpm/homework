import React, {Fragment, useState, useEffect, useRef} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Form, {ErrorMessage, Field, FormFooter, HelperMessage, ValidMessage} from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import ButtonGroup from "@atlaskit/button/button-group";
import Button from "@atlaskit/button/standard-button";
import LoadingButton from "@atlaskit/button/loading-button";
import {DatePicker} from '@atlaskit/datetime-picker';
import TextArea from '@atlaskit/textarea';
import {ModalTransition} from "@atlaskit/modal-dialog";
import Avatar from "@atlaskit/avatar";
import {AvatarPickerDialog} from '@atlaskit/media-avatar-picker';

const ProfileForm = () => {
    const [isAvatarPickerOpen, setIsAvatarPickerOpen] = useState(false);
    const [formData, setFormData] = useState(JSON.parse(window.sessionStorage.getItem('formData')) || {});
    const [imagePreviewSourceViaDataURIAPI, setImagePreviewSourceViaDataURIAPI] = useState(formData.avatar || '');

    console.log('form data', formData);


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
        console.log('form data', data);
        setFormData(data);
        window.sessionStorage.setItem('formData', JSON.stringify(data));
        return Promise.resolve(validateOnSubmit(data));
    };

    //avatar

    const saveDataURI = (dataURI) => {
        // Fake "uploading" call by adding a delay
        window.setTimeout(() => {
            setIsAvatarPickerOpen(false);
            setImagePreviewSourceViaDataURIAPI(dataURI);
            // setIsLoading
        }, 5);
    };

    // useEffect(() => {
    //     window.sessionStorage.setItem('formData', JSON.stringify(formData));
    // }, [formData]);
    //
    //
    // console.log(formData);

    return (
        <Container>
            <Row>
                <Col>
                    <Form
                        onSubmit={formSubmit}>
                        {({formProps, submitting}) => (
                            <form {...formProps}>
                                <Field
                                    name="firstname"
                                    label="First Name"
                                    defaultValue={formData.firstname || ''}
                                    isRequired
                                >
                                    {({fieldProps}) => (
                                        <TextField
                                            autoComplete="off"
                                            {...fieldProps} />
                                    )}
                                </Field>
                                <Field
                                    name="lastname"
                                    label="Last Name"
                                    defaultValue={formData.lastname || ''}
                                    isRequired
                                >
                                    {({fieldProps}) => (
                                        <TextField autoComplete="off" {...fieldProps} />
                                    )}
                                </Field>
                                <Field
                                    name="email"
                                    label="Email"
                                    defaultValue={formData.email || ''}
                                    isRequired
                                >
                                    {({fieldProps}) => (
                                        <TextField type="email" autoComplete="off" {...fieldProps} />
                                    )}
                                </Field>
                                <Field
                                    name="phone"
                                    label="Phone"
                                    defaultValue={formData.phone || ''}
                                    isRequired
                                >
                                    {({fieldProps}) => (
                                        <TextField type="tel" autoComplete="off" {...fieldProps} />
                                    )}
                                </Field>
                                <Field
                                    name="birthday"
                                    label="Birthday"
                                    defaultValue={formData.birthday || ''}
                                    isRequired
                                >
                                    {({fieldProps, error}) => (
                                        <>
                                            <DatePicker {...fieldProps}
                                            />
                                            {error && <ErrorMessage>{error}</ErrorMessage>}
                                        </>
                                    )}
                                </Field>
                                <Field
                                    name="about"
                                    label="About"
                                    defaultValue={formData.about || ''}
                                    isRequired>
                                    {({fieldProps}) => (
                                        <TextArea{...fieldProps}/>
                                    )}
                                </Field>
                                <Field
                                    name="avatar"
                                    label="Avatar"
                                    defaultValue={imagePreviewSourceViaDataURIAPI || ''}
                                >
                                    {({fieldProps}) => (
                                        <>
                                            <div>
                                                <Avatar src={imagePreviewSourceViaDataURIAPI || ''}/>
                                                <Button appearance="primary"
                                                        onClick={() => setIsAvatarPickerOpen(true)}>
                                                    Choose Profile Image
                                                </Button>
                                            </div>
                                            <ModalTransition>
                                                {isAvatarPickerOpen && (
                                                    <AvatarPickerDialog
                                                        avatars={[]}
                                                        onAvatarPicked={(selectedAvatar) => {
                                                            saveDataURI(selectedAvatar.dataURI);
                                                        }}
                                                        onImagePickedDataURI={exportedImg => {
                                                            console.log('onImagePickedDataURI: ', {dataURI: exportedImg});
                                                            //this.setIsLoading();
                                                            saveDataURI(exportedImg);
                                                        }}
                                                        onCancel={() => setIsAvatarPickerOpen(false)}
                                                        {...fieldProps}
                                                        //isLoading={isLoading}
                                                    />
                                                )}
                                            </ModalTransition>
                                        </>
                                    )}
                                </Field>

                                <FormFooter>
                                    <ButtonGroup>
                                        <Button appearance="subtle">Cancel</Button>
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