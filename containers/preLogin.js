import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import Btn from '../components/btn';
import { defaultViewStyle, mainColor, labelTextColor } from '../assets/styleVariables';
import { StackActions, NavigationActions } from 'react-navigation';
import { navigateAndReset } from '../helpers/navigationHelper';

class PreLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'none'
        };
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={defaultViewStyle}>
                <View
                    style={{
                        display: 'flex',
                        marginTop: '8%',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        style={{
                            width: 200,
                            height: 300,
                            
                        }} 
                        source={require('../assets/images/Logo.png')}
                    />
                </View>
                <Text style={{ color: labelTextColor, marginTop: -30, fontSize: 18, textAlign: 'center' }} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </Text>
                <View style={{ marginTop: 45 }}>
                    <Btn
                        color={'#FFF'}
                        textColor={mainColor}
                        borderColor={mainColor}
                        text={'Quero doar'}
                        type={'xlarge'}
                        onPress={() => { navigateAndReset(this.props, 'Login', { goToAdRegister: true }); }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Btn
                        text={'Quero doações'}
                        type={'xlarge'}
                        onPress={ () => { navigateAndReset(this.props, 'AdvertsList') } }
                    />
                </View>
            </View>
        );
    }
}

export default PreLogin;