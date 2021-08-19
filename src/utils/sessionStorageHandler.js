export const getParsedDataFromSessionStorage = (name) => {
    return JSON.parse(window.sessionStorage.getItem(name));
};

export const saveDataToSessionStorage = (name, data) => {
    return window.sessionStorage.setItem(name, JSON.stringify(data));
};