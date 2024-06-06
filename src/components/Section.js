import { produits } from '../data/stock.js';
import Produit from './Produit.js'; // Ensure you have the correct path to the Produit component

const Section = ({panier, updatePanier}) => {
    return (
        <section id="produits">
        <div id="produits-liste">
            {produits.map((produit, key) => (
                <Produit
                    key={produit.id}
                    photo={produit.photo}
                    nom={produit.nom}
                    prix={produit.prix}
                    panier={panier} updatePanier={updatePanier}
                />
            ))}
        </div>
        <div id="produits-boutons">
            <a href="produits.html">Voir plus</a>
        </div>
    </section>
    );
};

export default Section;
