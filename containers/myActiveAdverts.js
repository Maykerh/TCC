import React, { Component } from 'react';
import { View } from 'react-native';
import ListView from '../components/listView';
import { defaultViewStyle } from '../assets/styleVariables';
import FloatingButton from '../components/floatingButton';
import * as actions from '../actions/myAdvertsActions';
import Loading from '../components/loading';
import NoDataToShow from '../components/noDataToShow';
import { connect } from 'react-redux';

var data = [
    {id: '1', title: '3 Caixas de azulejo', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a facilis fugit, quia repudiandae ab id, ad asperiores in at nisi quo nostrum. Quod doloribus optio blanditiis, architecto modi consequatur.'},
    {id: '2', title: '25 Kg de cimento', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsam aperiam'},
    {id: '3', title: 'Madeira para caixaria', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '4', title: '250 tijolos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'},
    {id: '5', title: '3 Caixas de azulejo', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a facilis fugit, quia repudiandae ab id, ad asperiores in at nisi quo nostrum. Quod doloribus optio blanditiis, architecto modi consequatur.'},
    {id: '6', title: '25 Kg de cimento', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsam aperiam'},
    {id: '7', title: 'Madeira para caixaria', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '8', title: '250 tijolos', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'}         
];

class MyActiveAdverts extends Component {
    constructor(props) {
        super(props);

        this.onPressFloating = this.onPressFloating.bind(this);
        this.onClickItem = this.onClickItem.bind(this);

        this.props.getActiveAds();
    }

    onPressFloating() {
        alert('ah')
    }

    onClickItem(item) {
        console.log('clicou no item ' + item)
    }

    render() {
        var { isLoading, activeAdvertsList } = this.props;

        if (isLoading) {
			return <Loading/>;
        }

        if (!activeAdvertsList || activeAdvertsList.length == 0) {
            return null;
        }
        
        return (
            <View styles={defaultViewStyle}>
                <ListView
                    onClickItem={this.onClickItem}
                    data={activeAdvertsList}
                />
                <FloatingButton onPress={this.onPressFloating}/>
            </View>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        activeAdvertsList: state.MyAdverts.activeAdvertsList,
        isLoading: state.LoadingState.isLoading
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getActiveAds: () => { dispatch(actions.getActiveAds()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyActiveAdverts);