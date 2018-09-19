import * as actionType from '../assets/actionConstants';

const initialState = {
    title: '',
    description: '',
    category: 1,
    imageb64: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.HANDLE_AD_TITLE:
            return Object.assign({}, state, { title: action.payload });
        case actionType.HANDLE_AD_DESCRIPTION: 
            return Object.assign({}, state, { description: action.payload});
        case actionType.HANDLE_AD_CATEGORY: 
            return Object.assign({}, state, { category: action.payload});
        case actionType.HANDLE_AD_IMAGE: 
            return Object.assign({}, state, { imageb64: action.payload});
        default:
            return state;
    }
}