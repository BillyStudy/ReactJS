import React, {useState, useEffect} from 'react'
//import Api from '../../services/api'


const Index = () => {
    //state
    const [users, setUsers] = useState([]); 

        
    const loadProducts = async () => {
        let response = await fetch('https://api.github.com/users');     //Api.get('/users'); 
        let products = await response.json();
        setUsers(products);
        //console.log(products);
    }
    //mouth
    useEffect(()=> {loadProducts()}, [])
        return(
            <>
                <h3> Quantidade de usuários: {users.length}</h3>
            {users.map((item) =>{return <div  key={item.id} style={{margin: 70, display: 'flex', alignItems: 'center'}}>
                <img src={item.avatar_url} style={{float: "left", width: 80, borderRadius: 100, marginRight: 30}} alt=""/>
                <div>
                    <strong>
                        <a href={"https://github.com/"+item.login} style={{textDecoration: 'none', color: '#222', fontSize: 25}}>{item.login}</a>
                    </strong>
                </div>
            </div>

        })}</>
        );
    }

    export default Index;