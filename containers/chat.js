import React from 'react';
import { View, Text, Platform } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { mainColor, btnTextColor } from '../assets/styleVariables';

class Chat extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [
				{
					_id: 1,
					text: 'Hello developer',
					createdAt: new Date(),
					user: {
					  _id: 2,
					  name: 'React Native',
					  avatar: 'https://placeimg.com/140/140/any',
					},
				}
			]
		}
	}

	static navigationOptions = ({ navigation }) => {
        return {
            title: 'Nome do anúncio (usuario)'
        }
    }

	onSend(messages = []) {
		this.setState(previousState => ({
		  messages: GiftedChat.append(previousState.messages, messages),
		}))
	}

	renderBubble (props) {
		return (
		 	<Bubble
				{...props}
				wrapperStyle={{
					right: {
						backgroundColor: mainColor
			  		}
				}}
		  	/>
		);
	}

	renderSend(props) {
        return (
            <Send {...props}>
				<Text 
					style={{
						marginRight: 15, 
						marginBottom: 10,
						color: mainColor,
						fontSize: 20,
						fontWeight: 'bold'
					}}
				>
					Enviar
				</Text>
            </Send>
        );
    }

	render() {
		return (
			<View style={{flex: 1}}>
				<GiftedChat
					messages={this.state.messages}
					onSend={messages => this.onSend(messages)}
					renderBubble={this.renderBubble}
					renderSend={this.renderSend}
					user={{
						_id: 1,
					}}
				/>
				{ Platform.OS === 'android' ? <KeyboardSpacer /> : null }
			</View>
		)
	}
}

export default Chat;
