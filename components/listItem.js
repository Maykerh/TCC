import React, { PureComponent } from 'react'
import { StyleSheet,TouchableHighlight, Text, View, Image } from 'react-native';
import { labelTextColor } from '../assets/styleVariables';

export default class ListItem extends PureComponent {
    constructor(props) {
        super(props);

        this.getImage = this.getImage.bind(this);
    }
    
    formatDescription(text) {
        if (text.length <= 80) {
            return text;
        }
        
        return text.slice(0, 80) + '...';
    }

    getImage() {
        var { image } = this.props;

        if (image) {
            return <Image style={styles.image} source={{ uri: 'data:image/jpeg;base64,' + image }}/>;
        }

        return <Image style={styles.image} source={require('../assets/images/no_image.png')}/>
    }

    render() {
        return (
            <TouchableHighlight onPress={() => { this.props.onClickItem(this.props.id) }}>
                <View style={styles.row}>
                    {this.getImage()}
                    <View style={styles.text}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <Text style={styles.description}>
                            {this.formatDescription(this.props.description)}
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
        fontSize: 18,
        marginBottom: 5
    },
    description: {
        flex: 1,
        color: labelTextColor
    }
});
