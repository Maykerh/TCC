import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes/routes';
import reducers from './reducers/reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

export default class App extends Component {

  	componentWillMount() {
		var config = {
	  		apiKey: "AIzaSyAusAerJaqCO0DuuiwuNyezuINr-gZf78w",
	  		authDomain: "app-tcc-708aa.firebaseapp.com",
	  		databaseURL: "https://app-tcc-708aa.firebaseio.com",
	  		projectId: "app-tcc-708aa",
	  		storageBucket: "app-tcc-708aa.appspot.com",
	  		messagingSenderId: "271544584051"
		};

		firebase.initializeApp(config);
  	}
  
  	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Routes/>
			</Provider>      
		);
  	}
}

const styles = StyleSheet.create({
  	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
  	},
});