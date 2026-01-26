import Logo from "./Logo";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>MAVO TECH <Logo /> </h2>
            </div>

            <div className="navbar-links">
                <ul>
                    <li>Componentes</li>
                    <li>Servicios</li>
                    <li>Contacto</li>
                </ul>
            </div>

            <CartWidget />
        </nav>
    );
};

export default NavBar