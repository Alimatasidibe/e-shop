import user_avatar from '../img/user.png';
import logo from '../img/icons/ico-eshop-s.png';
import facebook from '../img/icons/facebook.png';
import twitter from '../img/icons/twitter.png';
import vimeo from '../img/icons/vimeo.png';
import flickr from '../img/icons/flickr.png';
import rss from '../img/icons/rss.png';
import User from './user';
function Footer(){
    return (
<footer>
            <div id="contacts">
                <h2>Nous contactez ?</h2>
                <b>Tél (whatsapp):</b>  +223 60 60 60 60 <br/>
                <b>Adresse:</b> Badalabougou, Rue 15, Porte 10. <br />
                <b>Email:</b> <a href="mailto:contact@eshop.ml">contact@eshop.ml</a>
            </div>
            <div id="reseaux-sociaux">
                <h2>Nous suivre ?</h2>
                <p><img src={facebook} alt="Facebook"></img>
                <img src={twitter} alt="Twitter"></img>
                <img src={vimeo} alt="Vimeo"></img>
                <img src={flickr} alt="Flickr"></img>
                <img src={rss} alt="Rss"></img>
                    
                </p>
            </div>
            <div id="copyright">
                <h3>Copyright &copy; Hamidou KASSOGUE @ 2023</h3>
            </div>            
        </footer>
        );
    }
    export default Footer;