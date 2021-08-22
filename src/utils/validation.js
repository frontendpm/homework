import * as VALIDATION_TYPES from "./validationTypes";

const isValid = (VALIDATION_TYPE, value) => value.match(VALIDATION_TYPE.pattern) ?
        false : VALIDATION_TYPE.message;

export const validation = (type) => (value) => {
    switch (type) {
        case VALIDATION_TYPES.LETTERS_ONLY.name:
            return isValid(VALIDATION_TYPES.LETTERS_ONLY, value);
        case VALIDATION_TYPES.EMAIL.name:
            return isValid(VALIDATION_TYPES.EMAIL, value);
        case VALIDATION_TYPES.PHONE.name:
            return isValid(VALIDATION_TYPES.PHONE, value);
        default:
            return false;
    }
};