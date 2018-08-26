
import React from 'react';
import { TextInput } from 'react-native';
import { inputBorderColor } from '../assets/styleVariables';

export default TextArea = (props) => {
    var style = Object.assign({}, props.style, {paddingTop: 10});

    return (
        <TextInput 
            onChangeText={props.onChangeText}
            value={props.value}
            multiline
            numberOfLines={props.lines}
            label={props.label}
            placeholder={props.placeholder}
            maxLength={4000}
            placeholderTextColor={props.labelTextColor}
            underlineColorAndroid={'#fff'}
            style={{
                borderWidth: 1, 
                borderRadius: 5,
                borderColor: inputBorderColor,
                padding: 10, 
                textAlignVertical: 'top'
            }}
        />
    )
};