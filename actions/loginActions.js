import * as actionType from '../assets/actionConstants.js';

export function changeEmail(email) {
    return {
        type: actionType.HANDLE_LOGIN_EMAIL,
        payload: email
    }
}

export function changePassword(password) {
    return {
        type: actionType.HANDLE_LOGIN_PASSWORD,
        payload: password
    }
}

export function setEmailValidation(emailValidation) {
    return {
        type: actionType.HANDLE_LOGIN_EMAIL_VALIDATION,
        payload: emailValidation
    }
}

export function setPasswordValidation(passwordValidation) {
    return {
        type: actionType.HANDLE_LOGIN_PASSWORD_VALIDATION,
        payload: passwordValidation
    }
}