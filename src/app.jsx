import React from "react";
import {  BrowserRouter,Route, Routes } from "react-router-dom";
import  Browse from "./pages/browse";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/home";
import {firebase} from "./lib/firebase.prod";





export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path ="/browse" element={< Browse/>}/>
    <Route exact path ="/signin" element={< Signin/>}/>
    <Route exact path ="/signup" element={< Signup/>}/>
    <Route exact path ="/home" element={< Home/>}/>

   </Routes>
   </BrowserRouter>
  );


}


