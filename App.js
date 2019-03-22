import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes/routes';
import reducers from './reducers/reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import databaseConfig from './databaseConfig';

export default class App extends Component {
  	componentWillMount() {
		firebase.initializeApp(databaseConfig);
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