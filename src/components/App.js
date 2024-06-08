import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './Accueil';
import Panier from './Panier';


function App  ()  {
  let [panier, updatePanier]= useState([]);

useEffect(() => {
    console.log('modifier...');
  }, [panier])

  return (
    
    <Router>
      <Routes>
          <Route path = '/' element={<Accueil panier={panier} updatePanier={updatePanier}/>}></Route>
          <Route path = '/panier' element={<Panier panier={panier} updatePanier={updatePanier} />}></Route>
      </Routes>
  </Router>
    
   
  );
}

export default App;
