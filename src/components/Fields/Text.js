import TextField from "@atlaskit/textfield";
import {Field, HelperMessage, ErrorMessage} from "@atlaskit/form";
import {validation} from "../../utils/validation";
import {object, string} from "prop-types";

const Text = ({field, defaultValue}) => {
    return (
        <Field
            name={field.name}
            label={field.label}
            defaultValue={defaultValue}
            isRequired={field.isRequired}
            validate={validation(field.validation)}
        >
            {({fieldProps, error}) => (
                <>
                    <TextField
                        type={field.type.toLowerCase()}
                        {...fieldProps} />
                    {field.helperMessage ? (
                        <HelperMessage>
                            {field.helperMessage}
                        </HelperMessage>
                    ) : ''}
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </>
            )}
        </Field>
    )
};

Text.propTypes = {
    field: object.isRequired,
    defaultValue: string
};

export default Text;