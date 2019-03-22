import * as actionType from '../assets/actionConstants';

const initialState = {
    email: 'teste@teste.com',
    password: '123456',
    emailValidation: null,
    passwordValidation: null,
    loginError: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.HANDLE_LOGIN_EMAIL:
            return Object.assign({}, state, { email: action.payload });
        case actionType.HANDLE_LOGIN_PASSWORD: 
            return Object.assign({}, state, { password: action.payload});
        case actionType.HANDLE_LOGIN_EMAIL_VALIDATION:
            return Object.assign({}, state, { emailValidation: action.payload });
        case actionType.HANDLE_LOGIN_PASSWORD_VALIDATION: 
            return Object.assign({}, state, { passwordValidation: action.payload});
        case actionType.HANDLE_LOGIN_ERROR:
            return Object.assign({}, state, { loginError: action.payload});
        default:
            return state;
    }
}