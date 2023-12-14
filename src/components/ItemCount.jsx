import { useState } from "react"

const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1)

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
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>{contador}</p>
            <button>comprar</button>
        </div>
    )
}

export default ItemCount