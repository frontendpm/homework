export const LETTERS_ONLY = {
    name: "LETTERS_ONLY",
    message: "Only letters are accepted!",
    pattern: /^[A-Za-z]+$/
};

export const EMAIL = {
    name: "EMAIL",
    message: "It is not a valid email address!",
    pattern: /(.+)@(.+){2,}\.(.+){2,}/
};

export const PHONE = {
    name: "PHONE",
    message: "It is not a valid phone number!",
    pattern: /^[- +()]*[0-9][- +()0-9]*$/
};