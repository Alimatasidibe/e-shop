import React from 'react';
import Header from './Header'; // Adjust the path if necessary
import Main from './Main';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import { ProductsProvider } from '../hooks/products.context';


function Accueil  ()  {
  
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer />
    </React.Fragment>
  );
}

export default Accueil;
