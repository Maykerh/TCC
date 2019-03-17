import React from 'react';
import { View } from 'react-native';
import ListView from '../components/listView';

var fakeData = [
    {id: '1', description: '3 Caixas de azulejo',   title: 'João silva'},
    {id: '2', description: '25 Kg de cimento',      title: 'Frederico de paula'},
    {id: '3', description: 'Madeira para caixaria', title: 'Alberto Roberto'},
    {id: '4', description: '250 tijolos',           title: 'Jorge Fonseca'}
];

class ChatList extends React.Component {
    constructor(props) {
        super(props);

        this.handleChatOpen = this.handleChatOpen.bind(this);
    }

    handleChatOpen(item) {
        this.props.navigation.navigate('Chat');
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
