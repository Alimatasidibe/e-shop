import React from 'react';
import Header from './Header'; // Adjust the path if necessary
import Main from './Main';
import Footer from './Footer';
import { useState,useEffect } from 'react';


function Accueil  ({panier, updatePanier})  {
  
  return (
    <React.Fragment>
      <Header panier={panier} updatePanier={updatePanier}/>
      <Main panier={panier} updatePanier={updatePanier}/>
    <Footer />
    </React.Fragment>
  );
}

export default Accueil;
