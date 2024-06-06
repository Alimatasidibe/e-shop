const Produit = ({photo, nom, prix,panier, updatePanier}) => {
    const addToPanier = (nom , prix ) =>{
        const itemInPanier = panier.find(item  => item.nom===nom) 
        if (itemInPanier){
            const panierSansItem = panier.filter(item => item.nom !== nom) 
            updatePanier([...panierSansItem,{nom, prix, qte: itemInPanier.qte +1 }])
        }else{
            updatePanier([...panier,{nom, prix, qte: 1 }])
        }
        console.log(panier)
    }
    return(
        <div class="produit-badge">
                           <div className="produit-image">
                               <img src={require(`../img/products/${photo}`)}alt={nom} />
                           </div>
                           <div className="produit-details">
                               <h2>{nom}</h2>
                               <h3>{prix} F</h3>
                           </div>
                           <div className="produit-bouton">
                               <button className="ajout-panier-btn"  onClick={() => {addToPanier(nom,prix, 1)}}>+Panier</button>
                               <button className="details-btn" >Détails</button>
                           </div>
                       </div>
           );

           
}

export default Produit;
  