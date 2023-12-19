import { useState, useEffect } from "react";
import displayProductos from "../utilities/data.js";
import ItemList from "../itemlist/ItemList.jsx"
import "./itemlistcontainer.css"

const ItemListContainer = ({ bienvenida }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        displayProductos
            .then((respuesta) => {
                setProductos(respuesta)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("fin promesa");
            });
    }, [])


    return (
        <>
            <div className="container">
                <p> {bienvenida} </p>
            </div>
            <ItemList productos={productos} />
        </>
    );
};

export default ItemListContainer;
