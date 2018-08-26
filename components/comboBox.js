import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

export default class ComboBox extends Component {
    renderOptions(options) {
        optionCmps = [];
        options.map((option, index) => {
            optionCmps.push(
                <Picker.Item key={index} label={option.label} value={option.value} />
            );            
        });

        return optionCmps;
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 14, color: '#6d6d6d' }} >{this.props.label}</Text>
                <Picker
                    mode={'dropdown'}
                    selectedValue={this.props.value}
                    onValueChange={(v) => { this.props.onChange(v) }}
                >
                    {this.renderOptions(this.props.options)}
                </Picker>
            </View>
        )
    }
};





