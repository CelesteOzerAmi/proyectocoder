import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> Inicio </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    remeras
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    calzas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    pantalones
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar 