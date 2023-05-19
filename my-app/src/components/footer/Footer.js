import './Footer.css'
import logoFooter from '../../assets/logo/logo_footer.png'

function Footer(){
    return(
        <footer className="footer">
            <img src={logoFooter} className="logo_footer" alt="logo"></img>
            <h2 className="copyrights">© 2020 Kasa. All rights reserved</h2>
        </footer>
    );
}

export default Footer