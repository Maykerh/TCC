import React, { Component } from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';
import TextArea from '../components/textArea';
import AdvertImages from '../components/advertImages';
import Btn from '../components/btn';
import ComboBox from '../components/comboBox';
import { marginFormElements, defaultViewStyle, labelTextColor } from '../assets/styleVariables';
import * as actions from '../actions/advertDataActions';
import { RkTextInput } from 'react-native-ui-kitten';
import Loading from '../components/loading';

const categoryOptions = [
    { label: 'Madeira', value: 1 },
    { label: 'Cerâmica', value: 2 },
    { label: 'Telha', value: 3 },
    { label: 'Gesso', value: 4 }
];

class AdvertData extends Component {

    constructor(props) {
        super(props);

        this.createNewAd = this.createNewAd.bind(this);
        this.validateData = this.validateData.bind(this);

        this.state = {
            validation: {
                title: null,
                description: null,
                category: null,
                imageb64: null
            }
        }
    }

    createNewAd() {
        if (!this.validateData()) {
            return;
        }

        this.props.createNewAd(this.props);
    }
    
    validateData() {
        var { validation } = this.state;
        var { title, description, category, imageb64 } = this.props;
        
        validation.title = (!title || title == '') ? 'error' : null;

        validation.description = (!description || description == '') ? 'error' : null;

        validation.category = (!category || category == '') ? 'error' : null;

        // TODO: adicionar uma validação melhor para imagem
        validation.imageb64 = (!imageb64 || imageb64 == '') ? 'error' : null;

        this.setState({
            validation: validation
        });

        for (var i in validation) {
            if (validation[i] == 'error') {
                return false;
            }
        }

        return true;
    }

    render() {
        var { isLoading } = this.props;

        if (isLoading) {
			return <Loading/>;
        }

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
                        onPress={this.createNewAd}
                        text={'Finalizar'} 
                        type={'xlarge'}
                    />
                </View>
            </View>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        title: state.AdvertData.title,
        description: state.AdvertData.description,
        category: state.AdvertData.category,
        imageb64: state.AdvertData.imageb64,
        isLoading: state.LoadingState.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: (title) => dispatch(actions.changeTitle(title)),
        changeDescription: (description) => dispatch(actions.changeDescription(description)),
        changeCategory: (category) => dispatch(actions.changeCategory(category)),
        changeImage: (image) => dispatch(actions.changeImage(image)),
        createNewAd: (props) => dispatch(actions.createNewAd(props)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertData);