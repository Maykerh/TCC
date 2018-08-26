
import React from 'react';
import { Text } from 'react-native';
import { RkButton  } from 'react-native-ui-kitten';
import { marginFormElements, btnTextColor, mainColor, btnFontSize } from '../assets/styleVariables'

export default Btn = (props) => {
    return (
        <RkButton 
            rkType={props.type}
            style={{
                backgroundColor: props.color ? props.color : mainColor               
            }}
            full={props.full}
            onPress={props.onPress}
        >
            <Text
                style={{
                    color: props.textColor ? props.textColor : btnTextColor,
                    fontWeight: 'bold',
                    fontSize: btnFontSize
                }}
            >
                {props.text}
            </Text>
        </RkButton>
    )
};