import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Keyboard, KeyboardAvoidingView, Image } from 'react-native';
import { defaultViewStyle, mainColor } from '../assets/styleVariables';
import { TextInputMask } from 'react-native-masked-text';
import { RkTextInput } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import * as actions from '../actions/myAccountActions';
import Btn from '../components/btn';


class MyAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyboardAvoidingViewKey: 'keyboardAvoidingViewKey'
        }
    }

    componentDidMount() {
        this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHideListener.bind(this));
    }
    
    componentWillUnmount() {
        this.keyboardHideListener.remove()
    }

    keyboardHideListener() {
        this.setState({
            keyboardAvoidingViewKey: 'keyboardAvoidingViewKey' + new Date().getTime()
        });
    }

    render() {
        var props = this.props;

        return (
            <KeyboardAvoidingView 
                enabled 
                key={this.state.keyboardAvoidingViewKey}
                behavior='height'
                keyboardVerticalOffset={80}
            > 
                <ScrollView style={{backgroundColor: '#FFF'}} scrollEnabled keyboardShouldPersistTaps={'handled'}>
                    <View style={styles.header}></View>
                    <Image style={styles.headerImg} source={require('../assets/images/foto.png')} />
                    <View style={[defaultViewStyle, {zIndex: 0}]}>
                        <RkTextInput 
                            style={styles.input} 
                            label={'Nome'}
                            value={props.name}
                            onChangeText={this.props.changeName}
                        />
                        <TextInputMask
                            type={'Custom'}
                            style={styles.input}
                            customTextInput={RkTextInput}
                            value={props.phone}
                            onChangeText={this.props.changePhone}
                            customTextInputProps={{
                                label: 'Telefone',
                                keyboardType: 'numeric',
                            }}
                        />
                        <RkTextInput 
                            style={styles.input} 
                            label={'Email'}
                            value={props.email}
                            onChangeText={this.props.changeEmail}
                        />
                        <TextInputMask
                            type={'custom'}
                            options={{
                                mask: '99999-999'
                            }}
                            style={styles.input}
                            customTextInput={RkTextInput}
                            value={props.zip}
                            onChangeText={this.props.changeZip}
                            customTextInputProps={{
                                label: 'cep',
                                keyboardType: 'numeric',
                            }}
                        />
                        <RkTextInput 
                            style={styles.input}
                            label={'Estado'}
                            value={props.state}
                            onChangeText={this.props.changeState}
                        />
                        <RkTextInput 
                            style={styles.input}
                            label={'Cidade'}
                            value={props.city}
                            onChangeText={this.props.changeCity}
                        />
                        <RkTextInput 
                            style={styles.input}
                            label={'Bairro'}
                            value={props.neighborhood}
                            onChangeText={this.props.changeNeighborhood}
                        />
                        <RkTextInput 
                            style={styles.input}
                            label={'Rua'}
                            value={props.street}
                            onChangeText={this.props.changeStreet}
                        />
                        <RkTextInput 
                            style={styles.input}
                            label={'Número'}
                            value={props.number}
                            keyboardType={'numeric'}
                            onChangeText={this.props.changeNumber}
                        />
                        <View style={{marginTop: 25}}>
                            <Btn text={'Salvar'} type={'xlarge'} />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
};

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
    },
    header: {
        height: 70,
        backgroundColor: mainColor,
    },
    headerImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'transparent',
        marginTop: -50,
        borderColor: '#000',
        borderWidth: 1,
        alignSelf: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        name: state.MyAccount.name,
        email: state.MyAccount.email,
        phone: state.MyAccount.phone,
        zip: state.MyAccount.zip,
        state: state.MyAccount.state,
        city: state.MyAccount.city,
        neighborhood: state.MyAccount.neighborhood,
        street: state.MyAccount.street,
        number: state.MyAccount.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => dispatch(actions.changeName(name)),
        changeName: (email) => dispatch(actions.changeEmail(email)),
        changePhone: (phone) => dispatch(actions.changePhone(phone)),
        changeZip: (zip) => dispatch(actions.changeZip(zip)),
        changeState: (state) => dispatch(actions.changeState(state)),
        changeCity: (city) => dispatch(actions.changeCity(city)),
        changeNeighborhood: (neighborhood) => dispatch(actions.changeNeighborhood(neighborhood)),
        changeStreet: (street) => dispatch(actions.changeStreet(street)),
        changeNumber: (number) => dispatch(actions.changeNumber(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);