import * as actionType from '../assets/actionConstants.js';

export function changeName(name) {
    return {
        type: actionType.HANDLE_SIGNUP_NAME,
        payload: name
    }
}

export function changeEmail(email) {
    return {
        type: actionType.HANDLE_SIGNUP_EMAIL,
        payload: email
    }
}

export function changePassword(password) {
    return {
        type: actionType.HANDLE_SIGNUP_PASSWORD,
        payload: password
    }
}

export function setNameValidation(nameValidation) {
    return {
        type: actionType.HANDLE_SIGNUP_NAME_VALIDATION,
        payload: nameValidation
    }
}

export function setEmailValidation(emailValidation) {
    return {
        type: actionType.HANDLE_SIGNUP_EMAIL_VALIDATION,
        payload: emailValidation
    }
}

export function setPasswordValidation(passwordValidation) {
    return {
        type: actionType.HANDLE_SIGNUP_PASSWORD_VALIDATION,
        payload: passwordValidation
    }
}