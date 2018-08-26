import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Keyboard, KeyboardAvoidingView } from 'react-native';
import { defaultViewStyle, marginFormElements } from '../assets/styleVariables';
import { TextInputMask } from 'react-native-masked-text';
import { RkTextInput } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import * as actions from '../actions/contactActions';


class ContactData extends Component {

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
                style={defaultViewStyle}
            > 
                <ScrollView scrollEnabled keyboardShouldPersistTaps={'handled'}>
                    <RkTextInput 
                        style={styles.input} 
                        label={'Nome'}
                        value={props.name}
                        onChangeText={this.props.changeName}
                    />
                    <TextInputMask
                        type={'cel-phone'}
                        style={styles.input}
                        customTextInput={RkTextInput}
                        value={props.phone}
                        onChangeText={this.props.changePhone}
                        customTextInputProps={{
                            label: 'Telefone',
                            keyboardType: 'numeric',
                        }}
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
                        <Btn text={'Finalizar'} type={'xlarge'} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        name: state.Contact.name,
        phone: state.Contact.phone,
        zip: state.Contact.zip,
        state: state.Contact.state,
        city: state.Contact.city,
        neighborhood: state.Contact.neighborhood,
        street: state.Contact.street,
        number: state.Contact.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => dispatch(actions.changeName(name)),
        changePhone: (phone) => dispatch(actions.changePhone(phone)),
        changeZip: (zip) => dispatch(actions.changeZip(zip)),
        changeState: (state) => dispatch(actions.changeState(state)),
        changeCity: (city) => dispatch(actions.changeCity(city)),
        changeNeighborhood: (neighborhood) => dispatch(actions.changeNeighborhood(neighborhood)),
        changeStreet: (street) => dispatch(actions.changeStreet(street)),
        changeNumber: (number) => dispatch(actions.changeNumber(number))
    }
};

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);