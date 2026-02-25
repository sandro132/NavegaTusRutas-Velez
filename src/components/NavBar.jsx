import { Link } from "react-router-dom"
import Logo from "./Logo";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>
                    <Link to="/"> MAVO TECH <Logo /></Link>
                </h2>
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                        <Link to="/category/componentes"> Componentes</Link>
                        </li>
                    
                    <li>
                        <Link to="/category/servicios"> Servicios </Link>
                        </li>
                    
                    <li>
                        <Link to="/category/accesorios"> Accesorios </Link>
                    </li>
                </ul>
            </div>

            <CartWidget />
        </nav>
    );
};

export default NavBar;