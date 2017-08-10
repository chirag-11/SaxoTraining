import React from "react";
import ImgThumb from "./img.js";
export default class Search extends React.Component{

componentDidMount(){
fetch('http://localhost:3000/bvc',{method:'get'
        }).then((response)=>{
            return response.json();
        }).then((data)=>
        {
        this.setState({
            alldata:data,filter:data
        });
        }).catch(function(err){
        console.log("nothing"+err);
        });    
}

constructor(props){
    super(props);
        this.state ={
           alldata:[],
           filter:[]
           };
        this.Search=this.Search.bind(this);
        this.ToBeSearch=this.ToBeSearch.bind(this);
    }
ToBeSearch(evt){
    this.setState({
        val:evt.target.value
    });
}
Search(evt){
   
    let toSearch=this.state.val;
    var filterData=this.state.alldata.filter(function(evt){
        return evt.name.toLowerCase().includes(toSearch.toLowerCase());
    });
            this.setState({filter:filterData});
}
render (){
        return (
            <div >
        <div className="search-wrapper">
        <form>
            <input type="text" name="focus" required className="search-box" placeholder="Enter country" onChange={this.ToBeSearch} />
            <button className="close-icon" type="reset"></button>
            <button className="btn btn-search" type="button" onClick={this.Search}><i className="fa fa-search fa-fw"></i> Search</button>    
        </form>
    {this.state.filter.map(item=><ImgThumb key={item.id}obj={item}/>)}
</div></div>
        );
    }
}