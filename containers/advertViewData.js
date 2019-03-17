import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import TextArea from '../components/textArea';
import AdvertImages from '../components/advertImages';
import Btn from '../components/btn';
import ComboBox from '../components/comboBox';
import { marginFormElements, defaultViewStyle, labelTextColor, labelFontSize } from '../assets/styleVariables';
import * as actions from '../actions/advertViewDataActions';
import { RkTextInput } from 'react-native-ui-kitten';

class AdvertViewData extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadAdvertData('123');
    }
    
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
                <View style={{flex: 1}}>
                    <Image
                        style={styles.images}
                        source={require('../assets/images/tijolos.jpg')}
                    />
                </View>
                <ScrollView style={{flex: 1, margin: 10}}>  
                    <View>
                        <Text style={styles.subTitles}>
                            {this.props.category}
                        </Text>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <View style={styles.secondary}>
                            <Text style={styles.subTitles}>
                                {this.props.address}
                            </Text>
                            <Text style={styles.subTitles}>
                                {this.props.date}
                            </Text>

                        </View>
                        <Text style={{paddingBottom: 10, paddingTop: 10}}>
                            {this.props.description}
                        </Text>
                        <View style={styles.secondary}>
                            <Text style={styles.subTitles}>
                                {this.props.phone}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{margin: 10}}>
                    <Btn 
                        onPress={() => this.props.navigation.navigate('Chat')}
                        text={'Enviar mensagem'} 
                        type={'xlarge'} 
                    />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    subTitles: {
        fontSize: 16,
        color: labelTextColor,
        paddingBottom: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        
    },
    secondary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    images: {
        width: '100%',
        height: '100%'
    }
});

const mapStateToProps = (state) => {
    return {
        category: state.AdvertViewData.category,
        title: state.AdvertViewData.title,
        address: state.AdvertViewData.address,
        date: state.AdvertViewData.date,
        description: state.AdvertViewData.description,
        phone: state.AdvertViewData.phone,
        image: state.AdvertViewData.image,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadAdvertData: (oid) => dispatch(actions.loadAdvertData(oid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertViewData);