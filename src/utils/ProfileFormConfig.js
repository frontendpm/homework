import * as FIELD_TYPES from "./FieldTypes";

export const PROFILE_FORM_CONFIG = [
    {
        name: "firstname",
        label: "First name",
        isRequired: true,
        type: FIELD_TYPES.TEXT
    },
    {
        name: "lastname",
        label: "Last name",
        isRequired: true,
        type: FIELD_TYPES.TEXT
    },
    {
        name: "email",
        label: "E-mail",
        isRequired: true,
        type: FIELD_TYPES.EMAIL
    },
    {
        name: "phone",
        label: "Phone",
        isRequired: true,
        type: FIELD_TYPES.TEL
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
