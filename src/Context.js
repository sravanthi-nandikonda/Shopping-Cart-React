import { createContext,useState } from "react";

import React from 'react'


export const CartContext=createContext();

const Context = ({children}) => {
    const [cart,setCart]=useState([]);
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default Context
