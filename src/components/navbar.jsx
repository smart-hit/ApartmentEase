import { Link } from "react-router-dom";
import logo from '../images/logo/Ro-logo.png'

function Navbar(){
    return( 
       
           <>
           
            <div className="Navbar">
                <div className="logo"><img src={logo} alt="logo" height="100em" className="logo-img" /></div>
                <div className="links">
                <div className="Navbar-link">
                    <Link to="/" className="link">Home</Link>                            
                </div>
                <div className="Navbar-link"> 
                <Link to="/" className="link">About Us</Link>                            
                </div>
                </div>
            </div>
       
            </>
    );
}
export default Navbar