import { useProducts } from "../hooks/products.context"

const Produit = ({produit}) => {

    const {products, panier, updatePanier} = useProducts()

    const addToPanier = (produit) =>{
        const newPanier = [...panier].filter((item) => item.id === produit.id)
        if(newPanier.length > 0) return
        updatePanier([...panier, produit])
}
    return(
        <div class="produit-badge">
                           <div className="produit-image">
                               <img src={require(`../img/products/${produit.photo}`)} alt={produit.nom} />
                           </div>
                           <div className="produit-details">
                               <h2>{produit.nom}</h2>
                               <h3>{produit.prix} F</h3>
                           </div>
                           <div className="produit-bouton">
                               <button className="ajout-panier-btn"  onClick={() => {addToPanier(produit)}}>+Panier</button>
                               <button className="details-btn" >Détails</button>
                           </div>
                       </div>
           );

           
}

export default Produit;
  