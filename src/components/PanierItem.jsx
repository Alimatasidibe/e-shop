import React from "react";

const PanierItem = ({ produit, qte, updateQte, deleteProduct }) => {

  const handleMoins = () => {
    updateQte({...produit})
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
        <button className="plus-panier" onClick={handleMoins}>
          +
        </button>
        <button className="minus-panier" >
          -
        </button>
        <button className="remove-panier" onClick={() => deleteProduct(produit)}>
          x
        </button>
      </td>

      
    </tr>
  );
};
export default PanierItem;
