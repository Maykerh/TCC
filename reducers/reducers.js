import { combineReducers } from 'redux';
import AdvertData from './advertData';
import AdvertsList from './advertsList';
import Contact from './contact';

export default combineReducers({
    AdvertData,
    AdvertsList,
    Contact
});