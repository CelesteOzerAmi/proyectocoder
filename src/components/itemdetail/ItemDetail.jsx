

const ItemDetail = ({ producto }) => {
    return (
        <div className="card" key={producto.id}>
            <img src={producto.img} alt="" />
            <h1> {producto.nombre} </h1>
            <p>{producto.descripcion}</p>
            <strong>${producto.precio}</strong>
        </div>
    )
}

export default ItemDetail