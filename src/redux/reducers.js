import { INCREMENT, DECREMENT, NAME, EMAIL, PHONE, GENDER, ADDRESS, FETCH_DATA } from "./actionType";

const initialEstate = {
    counter : 0,
    name: 'Ravin',
    email: 'ravin@gmail.com',
    phone: '9098121104',
    gender: true,
    address: 'Vijay Nagar, Indore',
    todos: []
}

export const firstReducer = (state = initialEstate, action) => {

    switch(action.type){
        case INCREMENT :
            return{...state, counter : state.counter + 1};
        case DECREMENT : 
            return{...state, counter : state.counter - 1};
        case NAME : 
            return{...state, name : state.name};
        case EMAIL : 
            return{...state, email : state.email};
        case PHONE : 
            return{...state, phone : state.phone};
            case ADDRESS :
            return{...state, address : state.address}
        case GENDER : 
            return{...state, gender : state.gender ? 'Male' : 'Female'};
        case FETCH_DATA:
      return {...state, todos: action.data};
            default :
            return state;
    }
}