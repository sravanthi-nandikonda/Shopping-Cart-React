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
<<<<<<< HEAD
       
       <div className ='App'>
       <Header/>
       
=======
      
       <div className ='App'>
     <Header/>
>>>>>>> 2062cf6b0cb59fc94b2d2d69dd8e430adae9deea
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
