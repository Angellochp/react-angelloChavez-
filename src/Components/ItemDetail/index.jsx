import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../Context/shopProvider";
import ItemCount from "../ItemCount";
import "../ItemDetail/Style.css";

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)
    const {addProduct} = useContext(Shop)

    const onAdd = (cantidad) => {
        console.log(`Se agregó una cantidad de productos: ${cantidad}`)
        setQuantity(cantidad)
        addProduct({...detail, quantity: cantidad})
    }

    console.log(detail.title);
    return (
        <div className="detail-container">
            <img src={detail.image} alt="detail" className="detail-img card-detail-img" />
            <aside className="detail-aside">
                <h4>{detail.title}</h4>
                <p className="detail-aside">{detail.description}</p>
                {
                    quantity === 0 ?
                    <ItemCount 
                        stock={detail.stock}
                        initial={1} 
                        onAdd={onAdd}   
                    />
                    :
                    <button className="btn btn-primary p-2" >
                        <Link to="/cart" style={{ textDecoration:'none', color: "white"}}>
                            Ir al Carrito
                        </Link>
                    </button>
                }
            </aside>
        </div>
    );
};

export default ItemDetail;