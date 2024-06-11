import { produits } from '../data/stock.js';
import { useProducts } from '../hooks/products.context.jsx';
import Produit from './Produit.js'; // Ensure you have the correct path to the Produit component

const Section = () => {
    const {products, panier, updatePanier} = useProducts()
    return (
        <section id="produits">
        <div id="produits-liste">
            {products.map((produit, key) => (
                <Produit
                    key={produit.id}
                    produit={produit}
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
