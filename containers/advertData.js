import React, { Component } from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';
import TextArea from '../components/textArea';
import AdvertImages from '../components/advertImages';
import Btn from '../components/btn';
import ComboBox from '../components/comboBox';
import { marginFormElements, defaultViewStyle, labelTextColor } from '../assets/styleVariables';
import * as actions from '../actions/advertActions';
import { RkTextInput } from 'react-native-ui-kitten';
import { TextInput } from "../node_modules/react-native-gesture-handler";


const categoryOptions = [
    { label: 'Madeira', value: 1 },
    { label: 'Cerâmica', value: 2 },
    { label: 'Telha', value: 3 },
    { label: 'Gesso', value: 4 }
];

class AdvertData extends Component {

    constructor(props) {
        super(props);

        this.validateData = this.validateData.bind(this);
    }
    
    validateData() {
        // validar os dados antes de trocar de tela

        this.props.navigation.navigate('ContactData');
    }

    render() {
        return (
            <View style={defaultViewStyle}>  
                <View style={{marginTop: 5}}>
                    <RkTextInput 
                        label={'Título'}
                        onChangeText={this.props.changeTitle}
                        value={this.props.title}
                        maxLength={4000}
                    />
                </View>
                <View>
                    <TextArea 
                        onChangeText={this.props.changeDescription}
                        value={this.props.description}
                        multiline
                        lines={5}
                        label={'Descrição'}
                        placeholder={"Descrição"}
                        maxLength={4000}
                        placeholderTextColor={labelTextColor}
                    />
                </View>
                <View style={{marginTop: marginFormElements}}>
                    <ComboBox 
                        options={categoryOptions} 
                        label={'Categoria'}
                        value={this.props.category}
                        onChange={this.props.changeCategory}
                    />
                </View>
                <View style={{marginTop: marginFormElements}}>
                    <AdvertImages
                        onChange={this.props.changeImage}
                        imageb64={this.props.imageb64}
                    />
                </View>
                <View style={{marginTop: marginFormElements}}>
                    <Btn 
                        onPress={this.validateData}
                        text={'Avançar'} 
                        type={'xlarge'} 
                    />
                </View>
            </View>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        title: state.Advert.title,
        description: state.Advert.description,
        category: state.Advert.category,
        imageb64: state.Advert.imageb64,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: (title) => dispatch(actions.changeTitle(title)),
        changeDescription: (description) => dispatch(actions.changeDescription(description)),
        changeCategory: (category) => dispatch(actions.changeCategory(category)),
        changeImage: (image) => dispatch(actions.changeImage(image)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertData);