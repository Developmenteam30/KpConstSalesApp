import {INCREMENT, DECREMENT, NAME, PHONE, EMAIL, GENDER, ADDRESS} from './actionType';

const API = 'https://api.github.com/users/mapbox';


export const increment = () => ({
    type : INCREMENT,
});

export const decrement = () => ({
    type : DECREMENT,
});

export const actionName = () => ({
    type : NAME,
});

export const actionEmail = () => ({
    type : EMAIL,
});

export const actionPhone = () => ({
    type : PHONE,
});

export const actionGender = () => ({
    type : GENDER,
});
export const actionAddress = () => ({
    type : ADDRESS,
});
