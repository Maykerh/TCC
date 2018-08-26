import React, { Component } from 'react';
import { View } from 'react-native';
import ListView from '../components/listView';
import { defaultViewStyle } from '../assets/styleVariables';
import FloatingButton from '../components/floatingButton';

var data = [
    {id: '1', title: '3 Caixas de azulejo', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a facilis fugit, quia repudiandae ab id, ad asperiores in at nisi quo nostrum. Quod doloribus optio blanditiis, architecto modi consequatur.'},
    {id: '2', title: '25 Kg de cimento', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsam aperiam'},
    {id: '3', title: 'Madeira para caixaria', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '4', title: '250 tijolos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'},
    {id: '5', title: '3 Caixas de azulejo', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a facilis fugit, quia repudiandae ab id, ad asperiores in at nisi quo nostrum. Quod doloribus optio blanditiis, architecto modi consequatur.'},
    {id: '6', title: '25 Kg de cimento', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsam aperiam'},
    {id: '7', title: 'Madeira para caixaria', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '8', title: '250 tijolos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'}         
];

export default class MyActiveAdverts extends Component {

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