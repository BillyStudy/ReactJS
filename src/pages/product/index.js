import React, {Component} from 'react';
import './styleUser.css'

export default class Product extends Component{

    state={
        user: []
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        let response = await fetch(`https://api.github.com/users/${id}`);     //Api.get('/users'); 
        let users = await response.json();
        this.setState({user: users}) ;
        console.log(users);
    }
    render(){

        const user = this.state.user;
        return(
            <div id="userContainer">
                <img src={user.avatar_url} alt=""/>
                <div>
                    
                    <h1 style={{color: 'black'}}>{user.login}</h1>
                    <h2>work at <span>{user.company}</span></h2>
                    
                   
                    <h3>{user.bio}</h3>
                    <a href={user.blog}>Website</a>
                    <a href={user.url}>Profile</a>
                </div>
                
            </div>
        )
    }
}