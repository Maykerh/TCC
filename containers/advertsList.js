import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListView from '../components/listView';
import SearchBar from '../components/searchBar';
import { defaultViewStyle } from '../assets/styleVariables';
import * as actions from '../actions/advertsListActions';

class AdvertsList extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            filters: {
                text: ''
            }
        }
    }

    componentDidMount() {
        this.props.search(this.state.filters)
    }

    handleSearch(searchText) {
        var filters = this.state.filters;

        filters.text = searchText;

        this.setState({
            filters: filters
        });

        this.props.search(filters);
    }

    render() {
        return (
            <View styles={defaultViewStyle}>
                <SearchBar onSearch={this.handleSearch}/>
                <ListView
                    data={this.props.advertsList}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        advertsList: state.AdvertsList.advertsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (filters) => dispatch(actions.search(filters))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertsList);