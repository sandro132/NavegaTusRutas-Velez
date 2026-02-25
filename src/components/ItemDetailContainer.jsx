import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const products = [
            { id: 1, name: "Placa de Video RTX 4060", category: "componentes", price: 500, description: "Potente GPU para gaming." },
            { id: 2, name: "Procesador Ryzen 7", category: "componentes", price: 350, description: "Alto rendimiento multitarea." },
            { id: 3, name: "Reparación de PC", category: "servicios", price: 80, description: "Servicio técnico especializado." },
            { id: 4, name: "Instalación de Windows", category: "servicios", price: 50, description: "Instalación y optimización." },
            { id: 5, name: "Mouse Gamer", category: "accesorios", price: 40, description: "Precisión y RGB." },
        ];

    setLoading(true);

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(p => p.id === parseInt(itemId)));
        }, 500);
    });

    getItem.then(res => {
        setItem(res);
        setLoading(false);
    });

    }, [itemId]);

    return (
        <div>
            {loading ? <h3>Cargando detalle...</h3> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
