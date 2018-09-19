import * as actionType from '../assets/actionConstants.js';

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