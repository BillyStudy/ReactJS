import React, {Component} from 'react'
import Api from '../../services/api'


export default class Main extends Component{
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await Api.get('/users');
        console.log(response);
    }

    render(){
        return(
            <h1>API</h1>
        );
    }
}