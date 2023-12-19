import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <section className="navbar">
                <a href="#">inicio</a>
                <a href="#">vestimenta</a>
                <a href="#">calzado</a>
                <a href="#">artículos de deporte</a>
            </section>
            <CartWidget/>
        </>
    );
};

export default NavBar;
