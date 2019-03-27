import React, { Component } from 'react';
import { View } from 'react-native';
import ListView from '../components/listView';
import FloatingButton from '../components/floatingButton';
import { defaultViewStyle } from '../assets/styleVariables';
import { connect } from 'react-redux';
import * as actions from '../actions/myAdvertsActions';
import Loading from '../components/loading';

var data = [
    {id: '1', title: '100 Telhas', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis omnis corrupti soluta.'},
    {id: '2', title: 'Meia lata de tinta', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis quaerat earum fugit nulla praesentium quae quidem quo animi'}           
];

class MyFinishedAdverts extends Component {
    constructor(props) {
        super(props);

        this.onPressFloating = this.onPressFloating.bind(this);

        this.props.getInactiveAds();
    }

    onPressFloating() {
        alert('ah')
    }
    
    render() {
        var { isLoading, inactiveAdvertsList } = this.props;

        if (isLoading) {
			return <Loading/>;
        }

        if (!inactiveAdvertsList || inactiveAdvertsList.length == 0) {
            return null;
        }

        return (
            <View styles={defaultViewStyle}>
                <ListView
                    data={inactiveAdvertsList}
                />
                <FloatingButton onPress={this.onPressFloating}/>
            </View>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        inactiveAdvertsList: state.MyAdverts.inactiveAdvertsList,
        isLoading: state.LoadingState.isLoading
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getInactiveAds: () => dispatch(actions.getInactiveAds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFinishedAdverts);