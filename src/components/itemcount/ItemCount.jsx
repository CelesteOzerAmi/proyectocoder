import { useState } from "react"
import "./itemcount.css"

const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1)
    if (stock < 1) {

    } else {
        const sumar = () => {
            if (contador < stock) {
                setContador(contador + 1)
            }
        }
        const restar = () => {
            if (contador > 1) {
                setContador(contador - 1)
            }
        }

        return (
            <div className="card-counter">
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button>comprar</button>
            </div>
        )
    }

}

export default ItemCount