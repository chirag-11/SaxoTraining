import React from 'react';
import Details from '../components/details.js';
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

class DetailsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: {},
        };

    }
    componentDidMount() {
        if (this.props.country.length == 0) {
            this.props.GetData();
        }
        else {
            let id = this.props.match.params.id;
            this.setState({ current: this.props.country[id-1] });
        }
    }
    componentWillReceiveProps(props){
          let id = props.match.params.id;
            this.setState({ current: props.country[id-1] });
    }
    render() {
        return (
            <Details country={this.state.current} />
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);