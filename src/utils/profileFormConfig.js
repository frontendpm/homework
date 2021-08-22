import * as FIELD_TYPES from "./fieldTypes";
import * as VALIDATION_TYPES from "./validationTypes";

export const PROFILE_FORM_CONFIG = [
    {
        name: "firstname",
        label: "First name",
        isRequired: true,
        type: FIELD_TYPES.TEXT,
        validation: VALIDATION_TYPES.LETTERS_ONLY.name
    },
    {
        name: "lastname",
        label: "Last name",
        isRequired: true,
        type: FIELD_TYPES.TEXT,
        validation: VALIDATION_TYPES.LETTERS_ONLY.name
    },
    {
        name: "email",
        label: "E-mail",
        isRequired: true,
        type: FIELD_TYPES.EMAIL,
        validation: VALIDATION_TYPES.EMAIL.name
    },
    {
        name: "phone",
        label: "Phone",
        isRequired: true,
        type: FIELD_TYPES.TEL,
        validation: VALIDATION_TYPES.PHONE.name
    },
    {
        name: "birthday",
        label: "Birthday",
        isRequired: true,
        type: FIELD_TYPES.DATEPICKER
    },
    {
        name: "about",
        label: "About",
        isRequired: false,
        type: FIELD_TYPES.TEXTAREA,
        helperMessage: "Tell about yourself something more!"
    },
    {
        name: "avatar",
        label: "Avatar",
        isRequired: false,
        type: FIELD_TYPES.AVATAR,
        helperMessage: "Only gif/jpeg/png mime types are supported. Max file size is 10MB"
    }
];
