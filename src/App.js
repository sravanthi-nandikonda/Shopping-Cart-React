import React, { useContext } from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter,Route } from "react-router-dom";
import { useState } from "react";


const App = () => {
  
    
  return (
    <BrowserRouter>
       
       <div className ='App'>
       <Header/>
       
         <Route path='/'  exact>
         <Home/>
         </Route>
          <Route path='/cart' >
            <Cart/>
            </Route>

       </div>
    </BrowserRouter>
    
  );
};

export default App;