import React, { Component } from 'react'
import { defaultViewStyle, marginFormElements, labelTextColor } from '../assets/styleVariables';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { RkTextInput } from 'react-native-ui-kitten';
import Btn from '../components/btn';
import * as actions from '../actions/loginActions';
import { connect } from 'react-redux';

var auth = {
	email: 'Admin',
	password: 'admin'
}
class Signup extends Component {
	constructor(props) {
        super(props);

        this.login = this.login.bind(this);
	}
	
	login() {
		var {email, password} = this.props;

		this.props.setEmailValidation(null);
		this.props.setPasswordValidation(null);

		if (email == auth.email && password == auth.password) {
			alert('logado');
		} else {
			if (email != auth.email) {
				this.props.setEmailValidation('error');
			}
			
			if (password != auth.password) {
				this.props.setPasswordValidation('error');				
			}
		}
	}

  	render() {
		return (
			<View style={Object.assign({}, defaultViewStyle, {})}>
				<View style={styles.fieldsWrapper}>
                    <RkTextInput 
						style={styles.fields}
						labelStyle={this.props.nameValidation == 'error' ? styles.error : {}}
						label={'Nome'}
						value={this.props.password}
						secureTextEntry={true}
						onChangeText={this.props.changePassword}
                    />
					<RkTextInput 
						style={styles.fields}
						labelStyle={this.props.emailValidation == 'error' ? styles.error : {}}
                        label={'Email'}
						value={this.props.email}
						onChangeText={this.props.changeEmail}
                       
                    />
					<RkTextInput 
						style={styles.fields}
						labelStyle={this.props.passwordValidation == 'error' ? styles.error : {}}
						label={'Senha'}
						value={this.props.password}
						secureTextEntry={true}
						onChangeText={this.props.changePassword}
                    />
					<View style={styles.fields} >
                        <Btn onPress={this.login} text={'Criar conta'} type={'xlarge'} />
                    </View>
				</View>
                <View style={styles.bottomTexts}>
                    <View style={styles.terms}>
                        <View style={{alignItems: 'center'}}>
                            <Text>
                                Criando uma conta 
                            </Text>
                            <Text style={styles.text}>
                                você concorda com nossos
                            </Text>
                        </View>
                        <Text style={styles.linkText}>
                            Termos
                        </Text>
                    </View>
                    <View style={styles.terms}>
                        <Text style={styles.text}>
                            Já possui uma conta? 
                        </Text>
                        <Text style={styles.linkText}>
                            Entrar
                        </Text>
                    </View>
                </View>
			</View>
		)
  	}
}

const mapStateToProps = (state) => {
    return {
        // email: state.Login.email,
		// password: state.Login.password,
		// emailValidation: state.Login.emailValidation,
        // passwordValidation: state.Login.passwordValidation,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // changeEmail: (email) => dispatch(actions.changeEmail(email)),
		// changePassword: (password) => dispatch(actions.changePassword(password)),
		// setEmailValidation: (emailValidation) => dispatch(actions.setEmailValidation(emailValidation)),
        // setPasswordValidation: (passwordValidation) => dispatch(actions.setPasswordValidation(passwordValidation))
    }
};

const styles = StyleSheet.create({
    fieldsWrapper: {
	   justifyContent: 'center',
	   display: 'flex',
	   flexDirection: 'column',
       flex: 3,
       backgroundColor: 'red',
       marginTop: 50
	},
	fields: {
		marginTop: marginFormElements
	},
	linkText: {
		marginTop: 10,
		marginLeft: 5,
		fontSize: 15,
		color: /*labelTextColor*/ 'yellow',
		textDecorationLine: 'underline'
	},
	error: {
		color: 'red'
    },
    terms: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center'
    },
    bottomTexts: {
        justifyContent: 'flex-start',
	    display: 'flex',
        flexDirection: 'column',
        flex: 2,
        backgroundColor: 'green'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
