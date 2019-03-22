import * as actionType from '../assets/actionConstants.js';
import firebase from 'firebase';
import { navigateAndReset } from '../helpers/navigationHelper';

export function login(email, password, navigation) {
    return (dispatch) => {
        dispatch({ type: actionType.IS_LOADING, payload: true });

        firebase.auth()
            .signInWithEmailAndPassword(email, password.toString())
            .then(() => {
                if (navigation.getParam('goToAdRegister')) {
                    navigation.setParam('goToAdRegister', false);
                    
                    navigateAndReset(navigation, 'AdvertData');
                } else {
                    navigateAndReset(navigation, 'AdvertsList');
                }
            })
            .catch(function(error) {
                dispatch({ type: actionType.HANDLE_LOGIN_ERROR, payload: true });
                dispatch({ type: actionType.IS_LOADING, payload: false });
            });
    }
}

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