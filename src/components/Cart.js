import React,{useState,useEffect, useContext} from 'react'
import { CartContext } from '../Context';
import SingleProduct from './SingleProduct';


function Cart() {
    const {cart,setCart}=useContext(CartContext)
   const [total,setTotal] =useState();

   useEffect(()=>
   {
  setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0));
   },[cart])


    return (
        <div>
            <span style={{font:30}}>My Cart</span>
            
            <br/>
            <span style ={{fontSize:30}}>Total:{total}</span>
            <div className='productcontainer'>
              {cart.map((prod)=>(
                <SingleProduct prod={prod} key={prod.id}>
                </SingleProduct>
              ))} 

            </div>
        </div>

    )
}

export default Cart
