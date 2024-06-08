import React from "react";
import Header from './Header';
import Footer from './Footer';
import PanierItem from "./PanierItem";
function Panier  ({panier, updatePanier})  {

    const updateAte = (toUpdate, incremente = true) => {
        const myPanier = [...panier].map((item) => {
            const {produit} = item
            
            if((toUpdate.id === produit.id)){
                
                if (incremente) {
                    const newQte = produit.qte + 1
                    const newItem = {...produit, qte:newQte}
                    return newItem
                }else{
                    const newQte = produit.qte - 1
                    const newItem = {...produit, qte:newQte}
                    return newItem
                }
            
            }
            return produit
        })
        console.log('new panier after update', myPanier);
    }

    const deleteProduct = (toUpdate) => {
        const myPanier = [...panier].filter((item) => {
            const {produit} = item
            return produit.id !== toUpdate.id
        })
        // updatePanier(myPanier)
        console.log('new panier after delete', myPanier);
    }

    return (
        <React.Fragment>
          <Header panier={panier} updatePanier={updatePanier}/>
          <main>
            <div id="panier">
                <table>
                    <thead>
                        <tr>
                            <th className="photo">Photo</th>
                            <th className="nom">Nom</th>
                            <th className="prix">Prix (F CFA)</th>
                            <th className="quantite">Quantité</th>
                            <th className="total">Total (F CFA)</th>
                            <th className="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {panier && panier.map((item, index) =>(
                            <PanierItem produit = {item.produit} deleteProduct={deleteProduct} qte={item.qte} key={index} updateQte={updateAte} />
                                
                        ) )}
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2" className="grandtotal">GRAND TOTAL (F CFA)</td>
                            <td colSpan="4" className="grandtotalv">
                            {panier && panier.reduce(
                                    (total,item) => total + item.produit.prix * item.qte,
                                    0
                                )}
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <div id="btns-confirmer-annuler-panier">
                    <button id="confirmer-payer">Confirmer le panier et payer</button>
                    <button id="vider-panier">Vider le panier et reprendre</button>
                </div>
                            
            </div>
        </main>
    
          
          <Footer />
        </React.Fragment>
      );
}

export default Panier;