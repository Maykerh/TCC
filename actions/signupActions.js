import * as actionType from '../assets/actionConstants.js';
import { ToastAndroid } from 'react-native';
import firebase from 'firebase';
import { navigateAndReset } from '../helpers/navigationHelper';

export function createNewUser(name, email, password, navigation) {
    return (dispatch) => {
        dispatch({ type: actionType.IS_LOADING, payload: true });

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => dispatch(successfulSignup(name, email, password, navigation)))
            .catch((error) => dispatch(failedSignup(error)));
    }
}

function successfulSignup(name, email, password, navigation) {
    var uid = firebase.auth().currentUser.uid;
    
    ToastAndroid.show('Conta criada com sucesso!', ToastAndroid.SHORT);

    return (dispatch) => {
        firebase.database().ref('users/' + uid).set({
            name: name
        }).then(() => {
            dispatch({ type: actionType.IS_LOADING, payload: false });
            
            navigateAndReset(navigation, 'AdvertsList');
        })
        .catch(() => {
            dispatch({ type: actionType.IS_LOADING, payload: false });
            
            navigateAndReset(navigation, 'Login');
        });
    }
}

function failedSignup(error) {
    return (dispatch) => {
        alert('Ocorreu um erro ao efetuar o cadastro, tente novamente');
        console.log(error);
        dispatch({ type: actionType.IS_LOADING, payload: false });
    }
}

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