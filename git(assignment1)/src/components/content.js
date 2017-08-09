import React from "react";
import Home from "./home.js";
import Search from "./search.js";
import Details from "./details.js";
import {Route} from 'react-router-dom'

export default class Content extends React.Component{

ComponentDidMount(){
fetch('http://localhost:3000/getData', {
        method: 'get'
        }).then(function(response) {
            return response.json()
        }).then(function(data)
        {
            console.log(data);
        }).catch(function(err) {
            console.log("nahi mila"+err)
        })
        
}


    render (){
        return (
            <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/search" component={Search}/>
              <Route exact path="/details" component={Details}/>
   
                </div>
        )
    }
}