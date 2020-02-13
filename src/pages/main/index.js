import React, {Component} from 'react'
//import Api from '../../services/api'
import './style.css';
import {Link} from 'react-router-dom';


export default class Index extends Component{
    state={
        users: [],
        usersInfo: {}
    }

    componentDidMount(){
        this.loadUsers();
    }

    loadUsers = async () => {
        let response = await fetch(`https://api.github.com/users`); 
        let {docs, ...usersInfo} = response;
        
         
        let user = await response.json();
        this.setState({users: user}) ;
        //console.log(this.state.users);
    }
    prevPag = async () => {
        await console.log('prev');
    }

    nextPag = async () => {
        await console.log('next');
    }


    render(){
        return(
            <>
               
                    {this.state.users.map(user => (
                         <div id="item" key={user.id}>
                            <img src={user.avatar_url} />
                            <div id="descItem">
                                <Link to={`users/${user.login}`} id="link">{user.login}</Link>
                            </div>
                        </div>
                    ))}
                
                <div id="actions">
                    <button type="submit" onClick={this.prevPag}>Anterior</button>
                    <button type="submit" onClick={this.nextPag}>Próximo</button>
                </div>
            </>
        )
                
        
    }
}
