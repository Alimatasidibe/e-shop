import { useProducts } from "../hooks/products.context";
import Section from "./Section";

const Main = () => {
    const {products, panier, updatePanier} = useProducts()
    return (
        <main>
           <Section panier={panier} updatePanier={updatePanier}/>
            <aside id="filtre">
                <form>
                    <div className="form-group">
                        <label htmlFor="nom">Produit:</label>
                        <input type="search" className="form-control" name="nom" id="nom" placeholder="Que cherchez-vous?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cat">Categorie:</label>
                        <select name="cat" id="cat" className="form-control">
                            <option value="Tout">Toutes les catégories</option>
                            <option value="Habits/Mode">Habits/Mode</option>
                            <option value="Electronique">Appareils électroniques</option>
                            <option value="Meuble">Meubles</option>
                            <option value="Cosmétique">Produits cosmétiques</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prixmin">Prix min:</label>
                        <input type="text" className="form-control" name="prixmin" id="prixmin" placeholder="Prix min"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prixmax">Prix max:</label>
                        <input type="text" className="form-control" name="prixmax" id="prixmax" placeholder="Prix max"/>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" id="btn-filter">Filtrer les produits</button>
                    </div>
                </form>
            </aside>
        </main>
    );
};

export default Main;
