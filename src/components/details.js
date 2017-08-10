import React from "react";

 
export default class Details extends React.Component{

    constructor(props){
        super(props);
        this.state={
            alldata:[],
            current:{}
        }
    }

componentDidMount(){
    
fetch('http://localhost:3000/bvc',{method:'get'
            }).then((response)=>{
            return response.json()
            }).then((data)=>
        {
            this.setState({alldata:data
            });

            for(let i=0;i<this.state.alldata.length;i++)
            {
            
                if(this.props.match.params.id==this.state.alldata[i].id)
                {   console.log("dfdsfd")
                    this.setState({current:this.state.alldata[i]})
                    break;
                }
            }
            console.log(this.state.current);
            }).catch(function(err){
            console.log("nothing"+err);
        })}


        render (){
        return (
<div>
    <div className="container">
        <h2>Panels with Contextual Classes</h2>
<           div className="panel-group">
                <div className="panel panel-info">
                    <div className="panel-heading">Name Of Country</div>
                        <div className="panel-body">{this.state.current.name}</div>
                    </div>
                <div className="panel panel-info">
                    <div className="panel-heading">Capital Of Country</div>
                        <div className="panel-body">{this.state.current.capital}</div>
                    </div>

                <div className="panel panel-info">
                    <div className="panel-heading">Link</div>
                        <div className="panel-body">{this.state.current.imageUrl}</div>
                    </div>
                        <button className=".btn-primary">Edit</button>

            </div>
    </div>
 </div>
        )
    }
}