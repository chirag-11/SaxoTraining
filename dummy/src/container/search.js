import React from 'react';
import Search from '../components/search.js';
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

class SearchContainer extends React.Component {
 
    render() {
        return (
            <Search country={this.props.country} GetData={this.props.GetData} />
        );

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer); 