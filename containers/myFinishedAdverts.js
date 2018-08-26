import React, { Component } from 'react';
import { View } from 'react-native';
import ListView from '../components/listView';
import FloatingButton from '../components/floatingButton';
import { defaultViewStyle } from '../assets/styleVariables';

var data = [
    {id: '1', title: '100 Telhas', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '2', title: 'Meia lata de tinta', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'}           
];

export default class MyFinishedAdverts extends Component {
    onPressFloating() {
        alert('ah')
    }
    render() {
        return (
            <View styles={defaultViewStyle}>
                <ListView
                    data={data}
                />
                <FloatingButton onPress={this.onPressFloating}/>
            </View>
        );
    }
}