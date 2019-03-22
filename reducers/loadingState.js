import * as actionType from '../assets/actionConstants';

const initialState = {
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.IS_LOADING:
            return Object.assign({}, state, { isLoading: action.payload });;
        default:
            return state;
    }
}