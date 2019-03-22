import * as actionType from '../assets/actionConstants';

const initialState = {
    name: 'Mayke',
    email: 'teste@teste.com',
    password: '123456',
    nameValidation: null,
    emailValidation: null,
    passwordValidation: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.HANDLE_SIGNUP_NAME:
            return Object.assign({}, state, { name: action.payload });
        case actionType.HANDLE_SIGNUP_EMAIL:
            return Object.assign({}, state, { email: action.payload });
        case actionType.HANDLE_SIGNUP_PASSWORD: 
            return Object.assign({}, state, { password: action.payload});
        case actionType.HANDLE_SIGNUP_NAME_VALIDATION:
            return Object.assign({}, state, { nameValidation: action.payload });
        case actionType.HANDLE_SIGNUP_EMAIL_VALIDATION:
            return Object.assign({}, state, { emailValidation: action.payload });
        case actionType.HANDLE_SIGNUP_PASSWORD_VALIDATION: 
            return Object.assign({}, state, { passwordValidation: action.payload});
        default:
            return state;
    }
}