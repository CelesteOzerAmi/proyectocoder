import { Link } from "react-router-dom"
import "./item.css"


const Item = ({ producto }) => {
    return (
        <div className="card" key={producto.id}>
            <img src={producto.img} alt="" />
            <h1> {producto.nombre} </h1>
            <p>{producto.descripcion}</p>
            <strong>${producto.precio}</strong>
            <Link to={`/detalle/${producto.id}`}>ver más</Link>
        </div>
    )
}

export default Item