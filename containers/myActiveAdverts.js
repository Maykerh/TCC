import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ListView from '../components/listView';
import { defaultViewStyle } from '../assets/styleVariables';

var data = [
    {id: '1', title: 'titulo 1', description: 'descrição 1'},
    {id: '2', title: 'titulo 2', description: 'descrição 2'}               
];

export default class MyActiveAdverts extends Component {
    render() {
        return (
            <View styles={defaultViewStyle}>
                <ListView
                    data={data}
                />
            </View>
        );
    }
}