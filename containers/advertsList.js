import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ListView from '../components/listView';
import SearchBar from '../components/searchBar';
import { marginFormElements, defaultViewStyle, btnTextColor, mainColor } from '../assets/styleVariables';
import * as actions from '../actions/advertsListActions';
import Modal from 'react-native-modalbox';
import ComboBox from '../components/comboBox';
import firebase from 'firebase';

const styles = StyleSheet.create({
    filterBtn: {
        color: btnTextColor,
        fontSize: 15,
        fontWeight: 'bold',
        width: 70,
        height: 20,
        textAlign: 'center'
    },
    modal: {
        height: 230,
        width: 270,
        borderRadius: 5,
        padding: 10
    }
});

const categoryOptions = [
    { label: '', value: null },
    { label: 'Madeira', value: 'Madeira' },
    { label: 'Cerâmica', value: 'Cerâmica' },
    { label: 'Telha', value: 'Telha' },
    { label: 'Gesso', value: 'Gesso' },
    { label: 'Alvenaria', value: 'Alvenaria' },
];

const cityOptions = [
    { label: '', value: null },
    { label: 'Joinville', value: 'Joinville' },
    { label: 'Jaraguá do sul', value: 'Jaraguá do sul' },
    { label: 'Araquari', value: 'Araquari' },
    { label: 'Guaramirim', value: 'Guaramirim' }
];

class AdvertsList extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleAdvertOpen = this.handleAdvertOpen.bind(this);

        this.state = {
            filterModalOpened: false
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: 
                <TouchableHighlight
                    underlayColor={mainColor}
                    onPress={navigation.getParam('openFilterModal')}>
                    <Text style={styles.filterBtn}>{'Filtros'}</Text>
                </TouchableHighlight>
        }
    }

    componentDidMount() {
        this.props.search(this.props.searchFilters);
        this.props.navigation.setParams({ openFilterModal: this.openFilterModal.bind(this) });
    }

    openFilterModal() {
        this.setState({
            filterModalOpened: true
        })
    }

    handleSearch() {
        this.setState({ filterModalOpened: false });
        this.props.search(this.props.searchFilters);
    }

    handleAdvertOpen(item) {
        this.props.navigation.navigate('AdvertViewData');
    }

    render() {
        return (
            <View styles={defaultViewStyle}>
                <SearchBar 
                    onSearch={this.handleSearch}
                    onChange={this.props.changeSearchFilters.bind(this, 'text')}
                    searchText={this.props.searchFilters.text}
                />
                <ListView
                    onClickItem={(item) => this.handleAdvertOpen(item)}
                    data={this.props.advertsList}
                />
                <Modal
                    style={[styles.modal, styles.modal3]}
                    isOpen={this.state.filterModalOpened}
                    ref={"modal1"}
                    position={'center'}
                    entry={'top'}
                    swipeToClose={false}
                    backButtonClose
                    coverScreen={true}
                    swipeThreshold={150}
                    onClosed={() => {this.setState({ filterModalOpened: false })}}
                    onOpened={() => {}}
                >
                    <View style={{marginBottom: 10}}>
                        <ComboBox 
                            options={cityOptions} 
                            label={'Cidade'}
                            value={this.props.searchFilters.city}
                            onChange={this.props.changeSearchFilters.bind(this, 'city')}
                        />
                    </View>
                    <View style={{marginBottom: 10}}>
                        <ComboBox 
                            options={categoryOptions} 
                            label={'Categoria'}
                            value={this.props.searchFilters.category}
                            onChange={this.props.changeSearchFilters.bind(this, 'category')}
                        />
                    </View>
                    <Btn 
                        onPress={this.handleSearch}
                        text={'Aplicar'} 
                        type={'xlarge'} 
                    />
                </Modal>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        advertsList: state.AdvertsList.advertsList,
        searchFilters: state.AdvertsList.searchFilters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (filters) => dispatch(actions.search(filters)),
        changeSearchFilters: (id, value) => dispatch(actions.changeSearchFilters(id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertsList);