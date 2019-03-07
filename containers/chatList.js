import React from 'react';
import { View, Text, Platform } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { mainColor, btnTextColor } from '../assets/styleVariables';
import ListView from '../components/listView';

var fakeData = [
    {id: '1', description: '3 Caixas de azulejo',   title: 'João silva'},
    {id: '2', description: '25 Kg de cimento',      title: 'Frederico de paula'},
    {id: '3', description: 'Madeira para caixaria', title: 'Alberto Roberto'},
    {id: '4', description: '250 tijolos',           title: 'Jorge Fonseca'}
];

class ChatList extends React.Component {
    handleChatOpen(item) {
        console.log('cliquei no -> ' + item);
    }

    render() {
        return (
            <View style={{display: 'flex', flex: 1, backgroundColor: '#FFF'}}>
                <ListView
                    onClickItem={this.handleChatOpen}
                    data={fakeData}
                />
            </View>
        )
    }
}

export default ChatList;
