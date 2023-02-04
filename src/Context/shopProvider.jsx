import React, { useState, se } from 'react'
import { createContext } from "react";

export const Shop = createContext()

const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        const isInCart = isProductInCart(product.id);
        if (isInCart) {
            const productoRepetido = products.find(element => element.id === product.id)
            productoRepetido.quantity += product.quantity
            setProducts([...products])
        } else {
            setProducts([...products, product])
        }
    }

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity
        }
        return cantidadTotal
    }

    const isProductInCart = (id) => {
        return products.some(product => product.id === id)
    }

    const total = () => {
        let total = 0;
        for (const product of products) {
            total += product.price * product.quantity
        }
        return total;
    }

    const cleanCart = () => {
        setProducts([])
    }

    const handleDelete = (id) => {
      const filtroProduct = products.filter(product => product.id !== id);
      setProducts(filtroProduct)
    
  };
    return (
        <Shop.Provider value = {{products, addProduct, countCart, total, cleanCart, handleDelete}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider