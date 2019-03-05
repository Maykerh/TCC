import * as actionType from '../assets/actionConstants';
import { search } from '../actions/advertsListActions';

const initialState = {
    advertsList: [],
    searchFilters: {
        city: null,
        category: null,
        text: null
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADVERT_SEARCH:
            return Object.assign({}, state, { advertsList: action.payload });
        case actionType.CHANGE_FILTERS:
            var newSearchFilters = Object.assign({}, state.searchFilters);

            newSearchFilters[action.payload.id] = action.payload.value;

            return Object.assign({}, state, { searchFilters: newSearchFilters });
        default:
            return state;
    }
}