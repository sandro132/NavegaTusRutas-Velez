import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <div className="card">
            <img src={item.img} alt={item.name} className="card-img" />
            <Link to={`/item/${item.id}`}>
                <h3>{item.name}</h3>
            </Link>
            <p className="price">Precio: ${item.price}</p>
        </div>
    );
};

export default Item;
