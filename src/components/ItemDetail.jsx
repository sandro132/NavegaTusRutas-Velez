//import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>

        <ItemCount />
        </div>
    );
};

export default ItemDetail;
