import * as actionType from '../assets/actionConstants.js';

export function changeName(name) {
    return {
        type: actionType.HANDLE_CONTACT_NAME,
        payload: name
    }
}

export function changeEmail(email) {
    return {
        type: actionType.HANDLE_CONTACT_EMAIL,
        payload: email
    }
}

export function changePhone(phone) {
    return {
        type: actionType.HANDLE_CONTACT_PHONE,
        payload: phone
    }
}
export function changeZip(zip) {
    return {
        type: actionType.HANDLE_CONTACT_ZIP,
        payload: zip
    }
}
export function changeState(state) {
    return {
        type: actionType.HANDLE_CONTACT_STATE,
        payload: state
    }
}
export function changeCity(city) {
    return {
        type: actionType.HANDLE_CONTACT_CITY,
        payload: city
    }
}
export function changeNeighborhood(neighborhood) {
    return {
        type: actionType.HANDLE_CONTACT_NEIGHBORHOOD,
        payload: neighborhood
    }
}
export function changeStreet(street) {
    return {
        type: actionType.HANDLE_CONTACT_STREET,
        payload: street
    }
}
export function changeNumber(number) {
    return {
        type: actionType.HANDLE_CONTACT_NUMBER,
        payload: number
    }
}