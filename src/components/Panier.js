import React from "react";
import Header from './Header'; // Adjust the path if necessary
import Main from './Main';
import Footer from './Footer';
function Panier  ({panier, updatePanier})  {
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
                        <tr id="1">
                            <td className="photo"><img src="img/products/product-1.jpg"/></td>
                            <td className="nom">Polo bleu</td>
                            <td className="prix">3000</td>
                            <td className="quantite">2</td>
                            <td className="total">6000</td>
                            <td className="action"><button className="plus-panier"><img src="img/icons/add.png"/></button><button className="minus-panier"><img src="img/icons/minus.png"/></button><button className="remove-panier"><img src="img/icons/delete.png"/></button></td>
                        </tr>
                        <tr id="2">
                            <td className="photo"><img src="img/products/product-2.jpg"/></td>
                            <td className="nom">App photo</td>
                            <td className="prix">3000</td>
                            <td className="quantite">2</td>
                            <td className="total">6000</td>
                            <td className="action"><button className="plus-panier"><img src="img/icons/add.png"/></button><button className="minus-panier"><img src="img/icons/minus.png"/></button><button className="remove-panier"><img src="img/icons/delete.png"/></button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" className="grandtotal">GRAND TOTAL (F CFA)</td>
                            <td colspan="4" className="grandtotalv">20000</td>
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