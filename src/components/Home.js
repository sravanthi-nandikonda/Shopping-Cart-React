import React, { useContext } from 'react';
import faker from 'faker';
import { useState} from 'react';
import SingleProduct from './SingleProduct';
import './styles.css';
import {CartContext} from '../Context'
faker.seed(100);

const  Home=()=> {
    const {cart,setCart}= useContext(CartContext);
    const productsArray=[...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.random.image(),
    }));


   // const [cart,setCart]=useState([]);
    const [products]=useState(productsArray);

    return (
        <div className='productcontainer'>
            {products.map((prod)=>(
                <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id}/>
            ))}
            
            
        </div>
    );
}

export default Home
