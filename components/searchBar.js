import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { RkText, RkTextInput } from 'react-native-ui-kitten';
import { mainColor, inactiveTextColor } from '../assets/styleVariables';

export default (props) => {
    return (
        <View style={styles.main}>
            <RkTextInput 
                autoCapitalize='none'
                autoCorrect={false}
                rkType='row'
                placeholder='Busca'
                inputStyle={styles.input}
                style={styles.searchArea}
                onChange={ (text) => { props.onChange(text.nativeEvent.text) }}
                value={props.searchText}
            />  
            <TouchableHighlight
                style={styles.searchBtn}
                underlayColor={inactiveTextColor}
                onPress={() => { props.onSearch(props.searchText)}}>
                <Image
                    style={{width: 32, height: 32}} 
                    source={require('../assets/images/search.png')}
                />
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: mainColor,
        paddingHorizontal: 6,
        paddingVertical: 7,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    searchArea: {
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: '#FFF',
        paddingRight: 10, 
        paddingLeft: 10,
        flex: 1,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50
    },
    input: {
        fontSize: 18,
        paddingVertical: 3
    },
    searchBtn: {
        backgroundColor: '#FFF',
        height: 42.2,
        width:48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50
    }
});