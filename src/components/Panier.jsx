import React from "react";
import Header from './Header';
import Footer from './Footer';
import PanierItem from "./PanierItem";
import { useProducts } from "../hooks/products.context";
function Panier  ()  {

    const { panier} = useProducts()

    return (
        <React.Fragment>
          <Header />
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
                            // <h1>Hello</h1>
                            <PanierItem produit = {item} qte={item.qte} key={index} />
                                
                        ) )}
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2" className="grandtotal">GRAND TOTAL (F CFA)</td>
                            <td colSpan="4" className="grandtotalv">
                            {panier && panier.reduce(
                                    (total,item) => total + item.prix * item.qte,
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