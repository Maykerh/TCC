import * as actionType from '../assets/actionConstants';

const initialState = {
    activeAdvertsList: [],
    inactiveAdvertsList: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.LOAD_ACTIVE_ADVERTS_LIST: 
            return Object.assign({}, state, { activeAdvertsList: action.payload });
        case actionType.LOAD_INACTIVE_ADVERTS_LIST: 
            return Object.assign({}, state, { inactiveAdvertsList: action.payload });
        default:
            return state;
    }
}