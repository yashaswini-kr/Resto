import React, { Component } from 'react'

export default class Login extends Component {
    constructor()
    {
        super();
        this.state = {
            name:'',
            password:'',
        }
    }
    login()
    {
        console.warn(this.state)
        fetch('http://localhost:3000/login?q='+this.state.name).then((data) =>{
            data.json().then((resp) => {
            console.warn("resp", resp)
            if(resp.length>0)
            {
                    console.warn(this.props.history.push('list'))
            }
            else{
                alert('Please check username and password')
            }
        })
            })
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter User name "
                name="username" onChange={(event)=>this.setState({name:event.target.value})}></input><br></br><br></br>
                <input type="password" placeholder="Enter Password"
                name="password" onChange={(event)=>this.setState({password:event.target.value})}></input><br></br><br></br>
                <button onClick = {()=>{this.login()}}>Login</button>
            </div>
        )
    }
}
