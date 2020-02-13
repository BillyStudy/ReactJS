import React, {Component} from 'react'
//import Api from '../../services/api'
import './style.css';
import {Link} from 'react-router-dom';


export default class Index extends Component{
    state={
        users: [],
        usersInfo: {},
        page: 1
    }

    componentDidMount(){
        this.loadUsers();
    }

    loadUsers = async (page) => {
        let response = await fetch(`https://api.github.com/users?since=${page}&per_page=3`); 
        
        let user = await response.json();
        this.setState({users: user}) ;
        //console.log(this.state.users);
    }
    prevPag = async () => {
        const {page} = this.state;

        if(page === 1) return;

        const pageNum = page - 1;
        
        this.loadUsers(pageNum);

        this.setState({page: pageNum});
    }

    nextPag = async () => {
        const {page, usersInfo} = this.state;

        if(page === usersInfo.pages) return;

        const pageNum = page + 1;
        
        this.loadUsers(pageNum);

        this.setState({page: pageNum});
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
