import React from 'react';
import { View, Text } from 'react-native';
import { RkTextInput } from 'react-native-ui-kitten';
import Btn from '../components/btn';
import { defaultViewStyle } from '../assets/styleVariables';

class PasswordRecovery extends React.Component {
    constructor(props) {
        super(props);

        this.changeEmail = this.changeEmail.bind(this); 

        this.state = {
            display: 'none',
            email: ''
        };
    }

    changeEmail(text) {
        this.setState({
            email: text
        });
    }

    render() {
        return (
            <View style={defaultViewStyle}>
                <RkTextInput
                    style={{marginTop: 25}}
                    label={'Email'}
                    value={this.state.email}
                    onChangeText={this.changeEmail}
                />
                <View style={{marginTop: 15, display: this.state.display}}>
                    <Text>
                        Sua nova senha foi enviada para o email informado
                    </Text>
                </View>
                <View style={{marginTop: 15}}>
                    <Btn text={'Enviar'} type={'xlarge'} onPress={() => {this.setState({ display: 'flex' });}}/>
                </View>
            </View>
        );
    }
}

export default PasswordRecovery;