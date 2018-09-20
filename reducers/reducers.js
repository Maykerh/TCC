import { combineReducers } from 'redux';
import AdvertData from './advertData';
import AdvertsList from './advertsList';
import Contact from './contact';
import Login from './login';

export default combineReducers({
    AdvertData,
    AdvertsList,
    Contact,
    Login
});