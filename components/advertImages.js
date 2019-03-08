import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, CameraRoll, PermissionsAndroid } from 'react-native';
import { Permissions, ImagePicker } from 'expo';

export default class TextInput extends Component {
    constructor(props) {
        super(props);
    }

    async checkPermission () {
        try {            
            var { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

            if (status !== 'granted') {
                return;
            }

            this.pickImage();
            
        } catch (err) { }
    }

    async pickImage() {
        var result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            aspect: [4, 3],
            mediaTypes: 'Images',
            base64: true
        });

        if (result.cancelled == true) {
            return;
        }
        
        this.props.onChange(result.base64);
        // this.setState({
        //     imageUri: 'data:image/jpeg;base64,' + result.base64
        // });
    }

    render () {
        var { imageb64 } = this.props;
        var img = null;
        
        if (imageb64 == null) {
            img = (
                <Image
                    style={styles.images} 
                    source={require('../assets/images/no_image.png')}
                />
            );
        } else {
            img = ( 
                <Image
                    style={styles.images} 
                    source={{uri: 'data:image/jpeg;base64,' + imageb64}}
                />
            );
        }

        return (
            <View style={styles.imagesContainer}>
                <TouchableOpacity onPress={() => {this.checkPermission()}}>
                    {img}
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imagesContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    images: {
        width: 330, 
        height: 210
    }
});