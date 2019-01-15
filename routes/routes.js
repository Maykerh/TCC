import { createStackNavigator } from 'react-navigation';
import Login from '../containers/login';
import AdvertData from '../containers/advertData';
import ContactData from '../containers/contactData';
import MyAdverts from '../containers/myAdverts';
import AdvertsList from '../containers/advertsList';
import AdvertViewData from '../containers/advertViewData';
import Signup from '../containers/signup';
import { mainColor, btnTextColor } from '../assets/styleVariables';

export default createStackNavigator({
    Signup: {
        screen: Signup,
        navigationOptions: ({ navigation }) => ({
            title: 'Criar conta',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    },
    AdvertViewData: {
        screen: AdvertViewData,
        navigationOptions: ({ navigation }) => ({
            title: 'Dados do anúncio',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    },
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: 'Entrar',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    },
    AdvertsList: {
        screen: AdvertsList,
        navigationOptions: ({ navigation }) => ({
            title: 'Anúncios',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    },
    MyAdverts: {
        screen: MyAdverts,
        navigationOptions: ({ navigation }) => ({
            title: 'Meus anúncios',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    },
    AdvertData: {
        screen: AdvertData,
        navigationOptions: ({ navigation }) => ({
            title: 'Dados do anúncio',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    },
    ContactData: {
        screen: ContactData,
        navigationOptions: ({ navigation }) => ({
            title: 'Dados de contato',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    }
    // Adverts: {
    //     screen: Adverts,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Anúncios'
    //     })
    // }
});