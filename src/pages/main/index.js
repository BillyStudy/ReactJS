import React, {useState, useEffect} from 'react'
//import Api from '../../services/api'
import './style.css'


const Index = () => {
    //state
    const [users, setUsers] = useState([]); 
    const [productsInfo, setproductsInfo] = useState({});
    const [pages, setPages] = useState(1);
        
    const loadProducts = async (page = 10) => {
        let response = await fetch(`https://randomuser.me/api/?results=${page}`);     //Api.get('/users'); 
        let products = await response.json();
        setUsers(products.results);
        const { docs, ...productsInfo} = products.results;

        setPages(page);
    }

    const prevPag = async () => {

    }

    const nextPag = async () => {
        const {page, productsInfo} = setPages(pages);

        if(page === productsInfo.page) return;

        let pageNumber = pages;
        loadProducts(pageNumber);
    }
    //mouth
    useEffect(()=> {loadProducts()}, [])
        return(
            <>
                {/* <h3> Quantidade de usuários: {users.length}</h3> */}
                
                {users && users.map((item) => { return <div key={item.id} id="item">
                        <img id="itemImg" src={item.picture.large}  alt=""/>
                        <div id="descItem">
                            <h3 href={item.name.first}>{item.name.first} {item.name.last}</h3>
                            <p>{item.location.state}, {item.location.country}</p>
                        </div>
                    </div>

                })}
        
        <div id="actions">
            {/* <button type="submit" onClick={prevPag}>Anterior</button>
            <button type="submit" onClick={nextPag}>Próximo</button> */}
        </div>
        
        </>
        );
    }

    export default Index;