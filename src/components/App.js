import React from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './Accueil';
import Panier from './Panier';


function App  ()  {
  let [panier, updatePanier]= useState([]);
  return (
    
    <Router>
      <Routes>
          <Route path = '/' element={<Accueil panier={panier} updatePanier={updatePanier}/>}></Route>
          <Route path = '/panier' element={<Panier />}></Route>
      </Routes>
  </Router>
    
   
  );
}

export default App;
