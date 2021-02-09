import React, { Component } from 'react'

export default class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state = {
            name:null,
            email:null,
            rating:null,
            address:null,
        }
    }

    componentDidMount()
    {
        fetch('http://localhost:3000/restaurant/'+ this.props.match.params.id).
        then((response)=>{response.json().then((result)=>
            {console.warn(result)
                this.setState({
                name:result.name,
                email:result.email,
                id:result.id,
                rating:result.rating,
                address:result.address

                })
            })
            })
    }
    update()
    {
        fetch('http://localhost:3000/restaurant/'+ this.state.id,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)   
    }).then((result)=>{result.json().then((resp)=>{
        alert("Restaurant has been updated")
    })
})

    }
    render() {
        console.warn(this.props.match.params.id);
        return (
            <div>
                <h1>Restaurant Update</h1>
                <div>
                <input onChange={(event)=>{this.setState({name:event.target.value})} }
                placeholder="Restaurant Name" value ={this.state.name}></input><br></br><br></br>
                <input onChange={(event)=>{this.setState({email:event.target.value})} }
                placeholder="Restaurant Email" value ={this.state.email}></input><br></br><br></br>
                <input onChange={(event)=>{this.setState({rating:event.target.value})} }
                placeholder="Restaurant Rating" value ={this.state.rating}></input><br></br><br></br>
                <input onChange={(event)=>{this.setState({address:event.target.value})} }
                placeholder="Restaurant Address" value ={this.state.address}></input><br></br><br></br>
                <button onClick={()=>{this.update()}}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}
