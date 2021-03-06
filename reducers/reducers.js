import { combineReducers } from 'redux';
import AdvertData from './advertData';
import AdvertsList from './advertsList';
import MyAccount from './myAccount';
import Login from './login';
import AdvertViewData from './advertViewData';
import Signup from './signup';
import LoadingState from './loadingState';
import MyAdverts from './myAdverts';

export default combineReducers({
    AdvertData,
    AdvertsList,
    MyAccount,
    Login,
    AdvertViewData,
    Signup,
    LoadingState,
    MyAdverts
});