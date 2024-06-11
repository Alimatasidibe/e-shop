import React from "react";
import { useProducts } from "../hooks/products.context";

const PanierItem = ({ produit, qte}) => {

  const { panier, updatePanier} = useProducts()

  const handleUpdateQte = (increment = true) => {
    const newPanier = [...panier].map((item) => {
      if(item.id === produit.id){
        return increment ? {...item, qte: item.qte + 1}: (item.qte === 1) ? {...item}: {...item, qte: item.qte - 1}
      }
      return item
    })
    updatePanier(newPanier)
  }

  const deleteFromPanier = () => {
    const newPanier = [...panier].filter((item) => item.id !== produit.id)
    updatePanier(newPanier)
  }

  return (
  <tr id={produit.id}>
      <td className="photo">
        <img src={require(`../img/products/${produit.photo}`)} />
      </td>
      <td className="nom">{produit.nom}</td>
      <td className="prix">{produit.prix}</td>
      <td className="quantite">{produit.qte}</td>
    <td className="total">{produit.prix*qte}</td>
      <td className="action">
        <button className="plus-panier" onClick={handleUpdateQte}>
          +
        </button>
        <button className="minus-panier" onClick={() => handleUpdateQte(false)} >
          -
        </button>
        <button className="remove-panier" onClick={() => deleteFromPanier()}>
          x
        </button>
      </td>

      
    </tr>
  );
};
export default PanierItem;
