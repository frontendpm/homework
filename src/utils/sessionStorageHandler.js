import {sleep} from "./sleep";

export const getParsedDataFromSessionStorage = async (name) => {
    await sleep(1000);
    try {
        return JSON.parse(window.sessionStorage.getItem(name)) || {};
    } catch {
        return {};
    }
};

export const saveDataToSessionStorage = (name, data) => {
    try {
        return window.sessionStorage.setItem(name, JSON.stringify(data));
    } catch {
        return false;
    }
};