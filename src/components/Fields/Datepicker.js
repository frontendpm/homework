import {ErrorMessage, Field, HelperMessage} from "@atlaskit/form";
import {DatePicker} from "@atlaskit/datetime-picker";

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
                    <DatePicker {...fieldProps}
                    />
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

export default Datepicker;