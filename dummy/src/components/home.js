import React from "react";
import Details from './details.js';
import ImgThumb from './img.js';
import { Link } from 'react-router-dom';
export default class Home extends React.Component {
    
    
    render() {

        return (
            <div>
                <div className="container" id="gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Gallery</h1>
                        </div>
                        {this.props.country.map(item => <ImgThumb key={item.id} obj={item} />)}
                        <Link to="/details/{key}" />

                    </div>
                </div>
            </div>
        );
    }
}
