import React from "react";
import { Link } from 'react-router-dom';
import Edit from './edit.js';
export default class Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            temp: {},
            current: {},
            showModal: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(evt) {
        let temp1 = Object.assign({}, this.props.country);
        this.setState({
            showModal: true
        });
        this.setState({
            temp: temp1
        });

    }
    handleCloseModal(evt) {
        this.setState({
            showModal: false
        });
        let temp1 = Object.assign({}, this.props.country);
        this.setState({
            temp: temp1
        });
    }
    handleSaveClick(evt) {

        this.setState({
            showModal: false
        });
        let temp1 = Object.assign({}, this.state.temp);

        this.setState({
            current: temp1
        })
        this.props.SaveData(temp1);
    }

    handleChange(evt) {
        let tt = evt.target.name;
        let val = evt.target.value;
        let temp1 = this.state.temp;
        temp1[tt] = val;
        this.setState({
            temp: temp1
        });
    }

    render() {
        return (
            <div id="details">
                <div className="container">
                    <h2>Panels with Contextual Classes</h2>
                    <div className="panel-group">
                        <div className="panel panel-info">
                            <div className="panel-heading">Name Of Country</div>
                            <div className="panel-body">{this.props.country.name}</div>
                        </div>
                        <div className="panel panel-info">
                            <div className="panel-heading">Capital Of Country</div>
                            <div className="panel-body">{this.props.country.capital}</div>
                        </div>

                        <div className="panel panel-info">
                            <div className="panel-heading">Link</div>
                            <div className="panel-body">{this.props.country.imageUrl}</div>
                        </div>

                        <Edit item={this.state.temp} showModal={this.state.showModal} onSaveClick={this.handleSaveClick} onCloseModal={this.handleCloseModal} handleChange={this.handleChange} />
                        <button className="btn btn-primary" onClick={this.handleClick}>Edit</button>
                    </div>
                </div>


            </div>
        );
    }
}
