import { createStackNavigator } from 'react-navigation';
import Login from '../containers/login';
import AdvertData from '../containers/advertData';
import MyAdverts from '../containers/myAdverts';
import AdvertsList from '../containers/advertsList';
import AdvertViewData from '../containers/advertViewData';
import Chat from '../containers/chat';
import ChatList from '../containers/chatList';
import MyAccount from '../containers/myAccount';
import PasswordRecovery from '../containers/passwordRecovery';
import PreLogin from '../containers/preLogin';
import Signup from '../containers/signup';
import { mainColor, btnTextColor } from '../assets/styleVariables';

export default createStackNavigator({
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
    PreLogin: {
        screen: PreLogin
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
    ChatList: {
        screen: ChatList,
        navigationOptions: ({ navigation }) => ({
            title: 'Minhas conversas',
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
    AdvertData: {
        screen: AdvertData,
        navigationOptions: ({ navigation }) => ({
            title: 'Novo anúncio',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    },
    PasswordRecovery: {
        screen: PasswordRecovery,
        navigationOptions: ({ navigation }) => ({
            title: 'Esqueci minha senha',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    },
    MyAccount: {
        screen: MyAccount,
        navigationOptions: ({ navigation }) => ({
            title: 'Minha conta',
            headerStyle: {
                backgroundColor: mainColor
            },
            headerTitleStyle: {
                color: btnTextColor
            },
            headerTintColor: btnTextColor
        })
    },
    Chat: {
        screen: Chat,
        navigationOptions: ({ navigation }) => ({
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
    }
    // Adverts: {
    //     screen: Adverts,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Anúncios'
    //     })
    // }
});