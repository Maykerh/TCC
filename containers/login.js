import React, { Component } from 'react'
import { defaultViewStyle, marginFormElements, labelTextColor, mainColor } from '../assets/styleVariables';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { RkTextInput } from 'react-native-ui-kitten';
import Btn from '../components/btn';
import * as actions from '../actions/loginActions';
import { connect } from 'react-redux';
import { navigateAndReset } from '../helpers/navigationHelper';

var auth = {
	email: 'Admin',
	password: 'admin'
}
class Login extends Component {
	constructor(props) {
        super(props);

        this.login = this.login.bind(this);
	}
	
	login() {
		var { email, password, navigation } = this.props;

		this.props.setEmailValidation(null);
		this.props.setPasswordValidation(null);

		if (email == auth.email && password == auth.password) {
			if (navigation.getParam('goToAdRegister')) {
				navigation.setParam('goToAdRegister', false);
				navigateAndReset(this.props, 'AdvertData');
			} else {
				navigateAndReset(this.props, 'AdvertsList');
			}
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
                        <Btn onPress={this.login} text={'Entrar'} type={'xlarge'} />
						<TouchableHighlight
							underlayColor={'#FFF'}
							style={styles.forgotPassWrapper}
							onPress={ () => this.props.navigation.navigate('PasswordRecovery')}
						>
							<Text style={styles.forgotPassTxt}>
								Esqueci minha senha
							</Text>
						</TouchableHighlight>
                    </View>
				</View>
				<View>
					<Btn 
						color={'#FFF'}
                        textColor={mainColor}
                        borderColor={mainColor}
						text={'Criar uma conta'} 
						type={'xlarge'} 
						onPress={() => this.props.navigation.navigate('Signup')}
					/>
				</View>
			</View>
		)
  	}
}

const mapStateToProps = (state) => {
    return {
        email: state.Login.email,
		password: state.Login.password,
		emailValidation: state.Login.emailValidation,
        passwordValidation: state.Login.passwordValidation,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeEmail: (email) => dispatch(actions.changeEmail(email)),
		changePassword: (password) => dispatch(actions.changePassword(password)),
		setEmailValidation: (emailValidation) => dispatch(actions.setEmailValidation(emailValidation)),
        setPasswordValidation: (passwordValidation) => dispatch(actions.setPasswordValidation(passwordValidation))
    }
};

const styles = StyleSheet.create({
    fieldsWrapper: {
	   justifyContent: 'center',
	   display: 'flex',
	   flexDirection: 'column',
	   flex: 1,
	},
	fields: {
		marginTop: marginFormElements
	},
	forgotPassWrapper: {
		marginTop: 10,
		marginLeft: 5,
		width: 150
	},
	forgotPassTxt: {
		fontSize: 15,
		color: labelTextColor,
		textDecorationLine: 'underline'
	},
	error: {
		color: 'red'
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
