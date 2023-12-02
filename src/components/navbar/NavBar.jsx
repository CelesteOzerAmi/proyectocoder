import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <div id="navbar">
            <h1>
                Mike ✔
            </h1>
            <ul>
                <li>
                    <a href=""> remeras </a>
                </li>
                <li>
                    <a href=""> buzos </a>
                </li>
                <li>
                    <a href=""> calzas </a>
                </li>
                <li>
                    <a href=""> pantalones </a>
                </li>
            </ul>
            <CartWidget />

        </div>
    )
}

export default NavBar 