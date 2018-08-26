import React, { PureComponent } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableHighlight } from 'react-native';
import ListItem from './listItem';

export default class ListView extends PureComponent {
    
    constructor(props) {
        super(props);
    }

    keyExtractor = (item, index) => item.id;

    getItem(item) {

        return (
            <ListItem
                title={item.item.title}
                description={item.item.description}
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