import React, { PureComponent } from 'react'
import { StyleSheet,TouchableHighlight, Text, View, Image } from 'react-native';
import { labelTextColor } from '../assets/styleVariables';

export default class ListItem extends PureComponent {

    render() {
        return (
            <TouchableHighlight
                onPress={(a) => {console.log('escolhi => ' + a)}}
            >
                <View style={styles.row}>
                    <Image style={styles.image} source={require('../assets/images/no_image.png')}/>
                    <View style={styles.text}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <Text style={styles.description}>
                            {this.props.description}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FFF'
    },
    image: {
        width: 64,
        height: 64
    },
    text: {
        flex: 1,
        marginLeft: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {
        flex: 1,
        color: labelTextColor
    }
});
