import * as actionType from '../assets/actionConstants';

const initialState = {
    name: '',
    email: '',
    phone: '',
    zip: '',
    state: '',
    city: '',
    neighborhood: '',
    street: '',
    number: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.HANDLE_CONTACT_NAME:
            return Object.assign({}, state, {name: action.payload});
        case actionType.HANDLE_CONTACT_EMAIL:
            return Object.assign({}, state, {email: action.payload});
        case actionType.HANDLE_CONTACT_PHONE:
            return Object.assign({}, state, {phone: action.payload});
        case actionType.HANDLE_CONTACT_ZIP:
            return Object.assign({}, state, {zip: action.payload});
        case actionType.HANDLE_CONTACT_STATE:
            return Object.assign({}, state, {state: action.payload});
        case actionType.HANDLE_CONTACT_CITY:
            return Object.assign({}, state, {city: action.payload});
        case actionType.HANDLE_CONTACT_NEIGHBORHOOD:
            return Object.assign({}, state, {neighborhood: action.payload});
        case actionType.HANDLE_CONTACT_STREET:
            return Object.assign({}, state, {street: action.payload});
        case actionType.HANDLE_CONTACT_NUMBER:
            return Object.assign({}, state, {number: action.payload});
        default:
            return state;
    }
}

