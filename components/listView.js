import React, { PureComponent } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableHighlight } from 'react-native';
import ListItem from './listItem';
import { defaultViewStyle } from '../assets/styleVariables';

export default class ListView extends PureComponent {
    constructor(props) {
        super(props);

        this.getItem = this.getItem.bind(this);
    }

    keyExtractor = (item, index) => item.key;

    getItem(item) {
        return (
            <ListItem
                id={item.item.key}
                onClickItem={this.props.onClickItem}
                title={item.item.title}
                description={item.item.description}
                image={item.item.images[0] || null}
            />
        );
    }
    
    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this.getItem}
                keyExtractor={this.keyExtractor}
            />
        )
    }
}