import * as actionType from '../assets/actionConstants.js';
import firebase from 'firebase';
import { navigateAndReset } from '../helpers/navigationHelper';

export function createNewAd(props) {
    var advertData = {
        title: props.title,
        description: props.description,
        category: props.category,
        images: [ props.imageb64 ]
    }

    // TODO: buscar o endereço do usuário e chumbar no anúncio

    return (dispatch) => {
        dispatch({ type: actionType.IS_LOADING, payload: true });

        var uid = firebase.auth().currentUser.uid;
        var newAdKey = firebase.database().ref().child('adverts/active').push().key;

        var updates = {};

        updates[`/adverts/active/${newAdKey}`] = advertData;
        updates[`/user-adverts/${uid}/active/${newAdKey}`] = advertData;

        firebase.database().ref().update(updates)
            .then(() => { 
                dispatch({ type: actionType.IS_LOADING, payload: false });

                navigateAndReset(props.navigation, 'MyAdverts'); 
            })
            .catch((error) => {
                handleError(error);
                dispatch({ type: actionType.IS_LOADING, payload: false });
            });
    }
}

function handleError(error) {
    alert('Ops, algo deu errado, tente novamente!')
}

export function changeTitle(title) {
    return {
        type: actionType.HANDLE_AD_TITLE,
        payload: title
    }
}

export function changeDescription(description) {
    return {
        type: actionType.HANDLE_AD_DESCRIPTION,
        payload: description
    }
}

export function changeCategory(category) {
    return {
        type: actionType.HANDLE_AD_CATEGORY,
        payload: category
    }
}

export function changeImage(imageb64) {

    console.log(imageb64);
    return {
        type: actionType.HANDLE_AD_IMAGE,
        payload: imageb64
    }
}