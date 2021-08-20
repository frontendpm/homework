import {useState} from "react";
import {Field, HelperMessage} from "@atlaskit/form";
import Avatar from "@atlaskit/avatar";
import Button from "@atlaskit/button/standard-button";
import {ModalTransition} from "@atlaskit/modal-dialog";
import {AvatarPickerDialog} from "@atlaskit/media-avatar-picker";
import styled from "styled-components";

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  button {
    margin: 15px 0;
  }
`;

const Avatarpicker = ({field, defaultValue, setUri}) => {
    const [isAvatarPickerOpen, setIsAvatarPickerOpen] = useState(false);

    const saveDataURI = (dataURI) => {
        setIsAvatarPickerOpen(false);
        setUri(dataURI);
    };

    return (
        <Field
            name={field.name}
            label={field.label}
            defaultValue={defaultValue}
            isRequired={field.isRequired}
        >
            {({fieldProps}) => (
                <>
                    <ActionContainer>
                        <Avatar
                            size="xlarge"
                            src={defaultValue}/>
                        <Button appearance="primary"
                                onClick={() => setIsAvatarPickerOpen(true)}>
                            Choose Profile Image
                        </Button>
                        {field.helperMessage ? (
                            <HelperMessage>
                                {field.helperMessage}
                            </HelperMessage>
                        ) : ''}

                    </ActionContainer>
                    <ModalTransition>
                        {isAvatarPickerOpen && (
                            <AvatarPickerDialog
                                avatars={[]}
                                onAvatarPicked={(selectedAvatar) => {
                                    saveDataURI(selectedAvatar.dataURI);
                                }}
                                onImagePickedDataURI={exportedImg => {
                                    console.log('onImagePickedDataURI: ', {dataURI: exportedImg});
                                    saveDataURI(exportedImg);
                                }}
                                onCancel={() => setIsAvatarPickerOpen(false)}
                                {...fieldProps}
                            />
                        )}
                    </ModalTransition>
                </>
            )}
        </Field>
    )
};

export default Avatarpicker;