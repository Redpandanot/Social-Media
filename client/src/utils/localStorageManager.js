export const KEY_ACCESS_TOKEN="access_token";

export function getTheItem(key){
    return localStorage.getItem(key);
}

export function setTheItem(key, value){
    return localStorage.setItem(key, value);
}

export function removeTheItem(key){
    return localStorage.removeItem(key);
}
