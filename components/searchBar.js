import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { RkText, RkTextInput } from 'react-native-ui-kitten';
import { mainColor, inactiveTextColor } from '../assets/styleVariables';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        }
    }
    render() {
        return (
            <View style={styles.main}>
                <RkTextInput 
                    autoCapitalize='none'
                    autoCorrect={false}
                    rkType='row'
                    placeholder='Busca'
                    inputStyle={styles.input}
                    style={styles.searchArea}
                    onChange={ 
                        (text) => {
                            this.setState({
                                searchText: text.nativeEvent.text
                            });
                        }
                    }
                    value={this.state.searchText}
                />  
                <TouchableHighlight
                    style={styles.searchBtn}
                    underlayColor={inactiveTextColor}
                    onPress={() => {this.props.onSearch(this.state.searchText)}}>
                    <Image
                        style={{width: 32, height: 32}} 
                        source={require('../assets/images/search.png')}
                    />
                </TouchableHighlight>
            </View>
        )
  } 
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: mainColor,
        paddingHorizontal: 8,
        paddingVertical: 8,
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
        flex: 1
    },
    input: {
        fontSize: 18,
        paddingVertical: 6
    },
    searchBtn: {
        backgroundColor: '#FFF',
        height:48.4,
        width:48,
        display: 'flex',
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});