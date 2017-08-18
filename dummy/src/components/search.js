import React from "react";
import ImgThumb from "./img.js";
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: []
        };
        this.Search = this.Search.bind(this);
        this.ToBeSearch = this.ToBeSearch.bind(this);
    }
    ToBeSearch(evt) {
        this.setState({
            val: evt.target.value
        });
    }
    componentDidMount() {
        if (this.props.country.length == 0) {
            this.props.GetData();
            
        }
        else {
            this.setState({
                filter: this.props.country
            })
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            filter: props.country
        })
    }
    Search(evt) {
        evt.preventDefault();
        let tos = this.state.val;
        if (tos) {
            let filterData = this.props.country.filter(function (evt) {
                return evt.name.toLowerCase().includes(tos.toLowerCase());
            });
            this.setState({ filter: filterData });

        }
        else {
            this.setState({ filter: this.props.country })
        }
    }
    render() {
        return (
            <div >
                <div className="search-wrapper">
                    <form onSubmit={this.Search}>
                        <input type="text" name="focus" required className="search-box" placeholder="Enter country" onChange={this.ToBeSearch} />
                        <button className="close-icon" type="reset" />
                        <button className="btn btn-search" type="button" onClick={this.Search}><i className="fa fa-search fa-fw" /> Search</button>
                    </form>
                    {this.state.filter.map(item => <ImgThumb key={item.id} obj={item} />)}
                    {this.state.filter.length === 0 && <h1>no country found matching the text you enter</h1>}
                </div></div>
        );
    }
}