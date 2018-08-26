import React, { Component } from 'react';
import MyAdvertsRoutes from '../routes/myAdvertsRoutes';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { mainColor, btnTextColor } from '../assets/styleVariables';

export default class FloatingButton extends Component {
    render() {
        return (
          <View style={styles.MainContainer}>
                <TouchableOpacity 
                    activeOpacity={0.5} 
                    onPress={this.props.onPress} 
                    style={styles.TouchableOpacityStyle}
                >
                    <Text style={styles.FloatingButtonStyle}>+</Text>
                </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    TouchableOpacityStyle:{
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainColor
    },
    FloatingButtonStyle: {
        fontSize: 30,
        color: btnTextColor
    },
    MainContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 30,
        bottom: 30
    }
});