import React, { Component } from 'react';
import { Text, View } from 'react-native';

var data = [
    {id: '1', title: 'titulo 1', description: 'descrição 1'},
    {id: '2', title: 'titulo 2', description: 'descrição 2'}               
];

export default class MyFinishedAdverts extends Component {

    render() {
        return (
            <View>
                <Text>
                    finished ads
                </Text>
            </View>
        );
    }
}