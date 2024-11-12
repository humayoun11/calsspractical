import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './Pages/Home';
import AddNew from  './Pages/AddNew';

const App =()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addnew' element={<AddNew/>}/>
       
    
        </Routes>
        </BrowserRouter>
      )
    
}

export default App