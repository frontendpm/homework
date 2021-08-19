import React from "react";
import TextField from "@atlaskit/textfield";
import {Field, HelperMessage} from "@atlaskit/form";

const Text = ({field, defaultValue}) => {
    return (
        <Field
            name={field.name}
            label={field.label}
            defaultValue={defaultValue}
            isRequired={field.isRequired}
        >
            {({fieldProps}) => (
                <>
                    <TextField
                        type={field.type.toLowerCase()}
                        {...fieldProps} />
                    {field.helperMessage ? (
                        <HelperMessage>
                            {field.helperMessage}
                        </HelperMessage>
                    ) : ''}
                </>
            )}
        </Field>
    )
};

export default Text;