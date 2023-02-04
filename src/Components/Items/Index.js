import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

const Item = ({product}) => {
    return (
        <div className="ard text-bg-dark cards-products">
        <img src={product.image} className="card-img-top cards-img" alt={`id-${product.id}`}/>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}</p>
          <Link to={`/detail/${product.id}`} className="btn btn-primary">Conoce más</Link>
        </div>
      </div>
    )
  }

export default Item