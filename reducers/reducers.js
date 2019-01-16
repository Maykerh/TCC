import { combineReducers } from 'redux';
import AdvertData from './advertData';
import AdvertsList from './advertsList';
import Contact from './contact';
import Login from './login';
import AdvertViewData from './advertViewData';
import Signup from './signup';

export default combineReducers({
    AdvertData,
    AdvertsList,
    Contact,
    Login,
    AdvertViewData,
    Signup
});