import * as actionType from '../assets/actionConstants';

const initialState = {
    category: '',
    title: '',
    address: '',
    date: '',
    description: '',
    phone: '',
    image: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.LOAD_AD_DATA:
            return Object.assign({}, state, { 
                category: action.payload.category,
                title: action.payload.title,
                address: action.payload.address,
                date: action.payload.date,
                description: action.payload.description,
                phone: action.payload.phone,
                image: action.payload.image
            });
        default:
            return state;
    }
}