import React, {createContext, useContext, useState} from 'react'
import { produits } from '../data/stock'

const productContext = createContext()

function ProductsProvider({children}) {
  const [products, setProducts] = useState([...produits])
  const [panier, setPanier] = useState([])

  const updatePanier = (data) => {
    setPanier(data)
  }   

  return (
    <productContext.Provider className="Provider" value={{products, panier, updatePanier}} >
      {children}
    </productContext.Provider>
  )
}

const useProducts = () => {
  try{
    const context = useContext(productContext)
    console.log("Context", context);
    return context
  }catch(e){
    console.error("Context non dispo !", e);
  }
  
}

export {useProducts, ProductsProvider}