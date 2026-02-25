import { useState } from "react";

const ItemCount = () => {

    const [count, setCount] = useState(1);

    const incrementar = () => setCount(count + 1);
    const decrementar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button onClick={decrementar}>-</button>
            <span> {count} </span>
            <button onClick={incrementar}>+</button>
            <br />
            <button>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;