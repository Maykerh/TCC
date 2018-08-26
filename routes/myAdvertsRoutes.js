import { createMaterialTopTabNavigator } from 'react-navigation';
import MyActiveAdverts from '../containers/myActiveAdverts';
import MyFinishedAdverts from '../containers/myFinishedAdverts';
import { mainColor, secondaryColor, btnTextColor } from '../assets/styleVariables';

// TODO: unificar os arquivos MyActiveAdverts e MyFinishedAdverts

export default createMaterialTopTabNavigator(
    {
        MyActiveAdverts: {
            screen: MyActiveAdverts,
            navigationOptions: ({ navigation }) => ({
                title: 'Ativos',
                headerTitleStyle: {
                    color: btnTextColor
                },
                headerTintColor: btnTextColor
            })
        },
        MyFinishedAdverts: {
            screen: MyFinishedAdverts,
            navigationOptions: ({ navigation }) => ({
                title: 'Finalizados',
                headerTitleStyle: {
                    color: btnTextColor
                },
                headerTintColor: btnTextColor
            })
        }
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: mainColor,
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                color: btnTextColor
            },
            indicatorStyle: {
                backgroundColor: secondaryColor,
                height: 5
            },
            activeBackgroundColor: mainColor
        }
    }
)