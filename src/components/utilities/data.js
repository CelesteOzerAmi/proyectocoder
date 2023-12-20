const productos = [
    {
        id: "a1",
        categoria: "vestimenta",
        nombre: "short 1",
        descripcion: "short negro de dama",
        precio: 120, 
        stock: 15,
        img: "../public/img/carrito.png"
    },
    {
        id: "a2",
        categoria: "vestimenta",
        nombre: "short 2",
        descripcion: "short blanco de dama",
        precio: 120, 
        stock: 2,
        img: "../public/img/carrito.png"
    },
    {
        id: "a3",
        categoria: "vestimenta",
        nombre: "short 3",
        descripcion: "short largo de hombre",
        precio: 660, 
        stock: 23,
        img: "../public/img/carrito.png"
    },
    {
        id: "b1",
        categoria: "vestimenta",
        nombre: "calza",
        descripcion: "calza larga de dama",
        precio: 1300, 
        stock: 0,
        img: "../public/img/carrito.png"
    },
    {
        id: "b2",
        categoria: "vestimenta",
        nombre: "biker",
        descripcion: "biker de dama",
        precio: 340, 
        stock: 3,
        img: "../public/img/carrito.png"
    },
    {
        id: "c1",
        categoria: "articulos",
        nombre: "pelota",
        descripcion: "pelota de futbol",
        precio: 55, 
        stock: 19, 
        img: "../public/img/carrito.png"
    },
    
];

const displayProductos = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000)
}) ;


export default displayProductos