import React from 'react';
import Home from '../components/home.js';
import * as stateActions from "../actions/actions.js";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    let data = {
        country: state.state.country
    };
    return data;
};

const mapDispatchToProps = dispatch => ({
    GetData: () => dispatch(stateActions.GetData())
});

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.GetData();
    }
    render() {

        return (
            <Home country={this.props.country} />
        );

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);