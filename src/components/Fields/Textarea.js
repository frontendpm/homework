import {Field, HelperMessage} from "@atlaskit/form";
import TextArea from '@atlaskit/textarea';
import {object, string} from "prop-types";

const Textarea = ({field, defaultValue}) => {
    return (
        <Field
            name={field.name}
            label={field.label}
            defaultValue={defaultValue}
            isRequired={field.isRequired}
        >
            {({fieldProps}) => (
                <>
                    <TextArea {...fieldProps}/>
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

Textarea.propTypes = {
    field: object.isRequired,
    defaultValue: string
};

export default Textarea;