import RTX4060 from "../assets/RTX4060.jpg"
import coreI914900k from "../assets/coreI914900k.jpg"
import RamDDR5Corsair from "../assets/RamDDR5Corsair.jpg"
import Mantenimiento from "../assets/Mantenimiento.jpg"
import revision from "../assets/revision.jpg"
import optimizacion from "../assets/optimizacion.jpg"
import mouseRazerDeathAdder from "../assets/mouseRazerDeathAdder.jpg"
import tecladoRedragon from "../assets/tecladoRedragon.jpg"
import kitLimpieza from "../assets/kitLimpieza.jpg"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [items, setItems] = useState([]);
    const [loading, setLoading] =useState(true);

    useEffect(() => {
        const products = [
            {
                id: 1,
                name: "GeForce RTX 4060 Ti VENTUS 2X BLACK 8G",
                category: "componentes",
                price: "1'450.000",
                img: RTX4060
            },
            {
                id: 2,
                name: "Procesador Core i9-14900K 24 nucleos",
                category: "componentes",
                price: "1'630.000",
                img: coreI914900k
            },
            {
                id: 3,
                name: "Memoria Ram CORSAIR Vengeance RGB DDR5 16GB (2x8GB) 5200MHz",
                category: "componentes",
                price: "950.000",
                img: RamDDR5Corsair
            },
            {
                id: 4,
                name: "Mantenimineto",
                category: "servicios",
                price: "80.000",
                img: Mantenimiento
            },
            {
                id: 5,
                name: "Revision",
                category: "servicios",
                price: "30.000",
                img: revision
            },
            {
                id: 6,
                name: "Optimizacion Pc",
                category: "servicios",
                price: "40.000",
                img: optimizacion
            },
            {
                id: 7,
                name: "Mouse Razer DeathAdder Essential",
                category: "accesorios",
                price: "65.000",
                img: mouseRazerDeathAdder
            },
            {
                id: 8,
                name: "Teclado Redragon KUMARA K552P",
                category: "accesorios",
                price: "150.000",
                img: tecladoRedragon
            },
            {
                id: 9,
                name: "Kit limpieza pantallas",
                category: "accesorios",
                price: "80.000",
                img: kitLimpieza
            }
        ];

        const categories = ["componentes", "servicios", "accesorios"]
        
        setLoading(true);

        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {

                if (categoryId && !categories.includes(categoryId)) {
                    reject("Categoria no encontrada");
                    return;
                }
                if (categoryId) {
                    resolve(products.filter(p => p.category === categoryId));
                } else {
                    resolve(products);
                }
            }, 500);
        });

        

        getProducts.then(res => {
            setItems(res);
        })
        .catch(() => {
            setItems([]);
        })
        .finally(() =>{
        setLoading(false);
    });

    }, [categoryId]);

    return (
        <div>
            <h2>
                {categoryId ? `${categoryId}` : "Todos los productos"}
            </h2>

        {loading && <h3>Cargando...</h3>}

        {!loading && items.length === 0 && (
            <h3>No hay productos en esta categoria</h3>
        )}

        {!loading && items.length > 0 && (
            <ItemList items={items} />
        )}
        </div>
    );
};

export default ItemListContainer
