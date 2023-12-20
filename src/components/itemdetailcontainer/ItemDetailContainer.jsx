import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PuffLoader } from "react-spinners"
import displayProductos from "../utilities/data"
import ItemDetail from "../itemdetail/ItemDetail"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        displayProductos
            .then((respuesta) => {
                const productoEncontrado = respuesta.find((prod) => prod.id === id)
                setProducto(productoEncontrado)
            })
            .finally(() => {
                setCargando(false);
            })
    }, [])


    return (
        <>
            {
                cargando ?
                    (
                        <PuffLoader />
                    ) : (
                        < ItemDetail producto={producto} />
                    )
            }
        </>
    )
}

export default ItemDetailContainer


