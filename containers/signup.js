import React, { Component } from 'react'
import { defaultViewStyle, } from '../assets/styleVariables';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RkTextInput } from 'react-native-ui-kitten';
import Btn from '../components/btn';
import * as actions from '../actions/signupActions';
import { connect } from 'react-redux';
import { navigateAndReset } from '../helpers/navigationHelper';

class Signup extends Component {
	constructor(props) {
        super(props);

        this.signup = this.signup.bind(this);
	}
	
	signup() {
		var {name, email, password} = this.props;

		if (!this.validateData()) {
			alert('dados incorretos');
			return;
		}

		// Do signup

		alert('Conta criada com sucesso');

		navigateAndReset(this.props, 'AdvertsList');
	}
	
	validateData() {
		var {name, email, password} = this.props;
		var valid = true;

		if (!name || name.length < 3) {
			this.props.setNameValidation('error');
			valid = false;
		} else {
			this.props.setNameValidation(null);
		}

		if (!email || email.indexOf('@') == -1) {
			this.props.setEmailValidation('error');
			valid = false;
		} else {
			this.props.setEmailValidation(null);
		}

		if (!password || password.length < 5) {
			this.props.setPasswordValidation('error');
			valid = false;
		} else {
			this.props.setPasswordValidation(null);
		}

		return valid;
	}

  	render() {
		return (
			<View style={Object.assign({}, defaultViewStyle, {})}>
				<View style={styles.content}>
					<View style={styles.fieldsWrapper}>
						<RkTextInput 
							style={styles.fields}
							labelStyle={this.props.nameValidation == 'error' ? styles.error : {}}
							label={'Nome'}
							value={this.props.name}
							onChangeText={this.props.changeName}
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
						<View style={styles.createAccBtn} >
							<Btn onPress={this.signup} text={'Criar conta'} type={'xlarge'} />
						</View>
					</View>
				</View>
                <View style={styles.bottomTexts}>
                    <View style={styles.terms}>
						<TouchableOpacity onPress={ () => alert('termos') }>
                        	<View style={{alignItems: 'center'}}>
								<Text>
									Criando uma conta 
								</Text>
								<Text style={styles.text}>
									{"você concorda com nossos  "}
									<Text style={styles.linkText}>
										{"Termos"}
									</Text>
								</Text>
                        	</View>
						</TouchableOpacity>
                        
                    </View>
                    <View style={styles.hasAccText}>
						<TouchableOpacity onPress={ () => this.props.navigation.navigate('Login') }>
                        	<Text style={styles.text}>
								{"Já possui uma conta?  "}
								<Text style={styles.linkText}>
									{"Entrar"}
								</Text>
                        	</Text>
						</TouchableOpacity>
                    </View>
                </View>
			</View>
		)
  	}
}

const mapStateToProps = (state) => {
    return {
		name: state.Signup.name,
        email: state.Signup.email,
		password: state.Signup.password,
		nameValidation: state.Signup.nameValidation,
		emailValidation: state.Signup.emailValidation,
        passwordValidation: state.Signup.passwordValidation,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		changeName: (name) => dispatch(actions.changeName(name)),
        changeEmail: (email) => dispatch(actions.changeEmail(email)),
		changePassword: (password) => dispatch(actions.changePassword(password)),
		setNameValidation: (nameValidation) => dispatch(actions.setNameValidation(nameValidation)),
		setEmailValidation: (emailValidation) => dispatch(actions.setEmailValidation(emailValidation)),
        setPasswordValidation: (passwordValidation) => dispatch(actions.setPasswordValidation(passwordValidation))
    }
};

const styles = StyleSheet.create({
    content: {
	   justifyContent: 'center',
	   display: 'flex',
	   flexDirection: 'column',
       flex: 3,
       marginTop: 30
	},
	fieldsWrapper: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		flex: 3,
		marginTop: 30
	 },
	createAccBtn: {
		marginTop: 30
	},
	linkText: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#111111',
		textDecorationLine: 'underline'
	},
	error: {
		color: 'red'
    },
    terms: {
        flexDirection: 'row',
		justifyContent: 'center',
	},
	hasAccText: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 15
	},
    bottomTexts: {
        justifyContent: 'flex-start',
	    display: 'flex',
        flexDirection: 'column',
		flex: 2,
		marginTop: 30
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
