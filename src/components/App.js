import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './Accueil';
import Panier from './Panier';
import { ProductsProvider } from '../hooks/products.context';


function App  ()  {
  const [panier, updatePanier]= useState([]);

  return (
    <ProductsProvider>
    <Router>
      <Routes>
          <Route path = '/' element={<Accueil/>}></Route>
          <Route path = '/panier' element={<Panier/>}></Route>
      </Routes>
    </Router>
    </ProductsProvider>
  );
}

export default App;
