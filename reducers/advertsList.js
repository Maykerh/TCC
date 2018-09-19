import * as actionType from '../assets/actionConstants';

const initialState = {
    advertsList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADVERT_SEARCH:
            return Object.assign({}, state, { advertsList: action.payload });
            break;
        default:
            return state;
    }
}