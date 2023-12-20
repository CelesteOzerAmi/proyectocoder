import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import displayProductos from "../utilities/data.js";
import ItemList from "../itemlist/ItemList.jsx";
import "./itemlistcontainer.css";


const ItemListContainer = ({ bienvenida }) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoria } = useParams()

    useEffect(() => {
        displayProductos
            .then((respuesta) => {
                if (categoria) {
                    const productosFiltrados = respuesta.filter((producto) => producto.categoria === categoria)
                    setProductos(productosFiltrados)
                } else {
                    setProductos(respuesta)
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("fin promesa")
                setCargando(false);
            });
    }, [categoria]);


    return (
        <> {
            cargando ? (
                <PuffLoader />
                ) : (
                <div className="container">
                    <p> {bienvenida} </p>
                    <ItemList productos={productos} />
                </div>
            )
        }</>
    );
};

export default ItemListContainer;

