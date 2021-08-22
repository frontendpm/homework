import {ErrorMessage, Field, HelperMessage} from "@atlaskit/form";
import {DatePicker} from "@atlaskit/datetime-picker";
import {object, string} from "prop-types";

const Datepicker = ({field, defaultValue}) => {
    return (
        <Field
            name={field.name}
            label={field.label}
            defaultValue={defaultValue}
            isRequired={field.isRequired}
        >
            {({fieldProps, error}) => (
                <>
                    <DatePicker {...fieldProps}/>
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


Datepicker.propTypes = {
    field: object.isRequired,
    defaultValue: string,
};


export default Datepicker;