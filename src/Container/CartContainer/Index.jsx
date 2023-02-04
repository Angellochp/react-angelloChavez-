
import React, { useContext, useState } from 'react'
import { Shop } from '../../Context/shopProvider';
import TableRow from './TableRow'
import generateOrderObject from '../../services/generateOrderObject';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../FireBase/Config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import FormComp from '../../Components/Form';
import Spinner from 'react-bootstrap/Spinner';


const Cart = () => {

  const {products, total, cleanCart, countCart } = useContext(Shop);
  
  const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);

  console.log(products)

  const confirmPurchase = async (dataDelFormulario) => {
    const {phone: telefono, nombre, email} = dataDelFormulario
    try {
      setLoader(true);
  
      const order = generateOrderObject({
        nombre,
        email,
        telefono,
        cart: products,
        total: total()
      })
  

      console.log(order);

      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart()

      for (const productCart of products) {
        const productRef = doc(db, "Products", productCart.id);

        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }

      alert("Orden confirmada! tu ID de compra es: " + docRef.id);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormVis(false);
    }
  }
  return (
    <>
      {
        products.length !== 0 ?
        <>
          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Image</th>
                <th scope="col">title</th>
                <th scope="col">price</th>
                <th scope="col">quantity</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => {
                return <TableRow key={product.id} product={product}/>
              })}
              <tr>
                  <td style={{fontWeight:600}}colSpan={"3"}>Total</td>
                  <td>{total()}</td>
                  <td>{countCart()}</td>
                  <td><button onClick={() => cleanCart()}>Limpiar Carrito</button></td>
              </tr>
              <tr>
                <td colSpan={"3"}></td>
                <td colSpan={"3"}>
                {
                  loader ?
                  <Spinner animation="grow" variant="success"/>
                  :
                   <button onClick={()=> setFormVis(true)}>Confirmar compra</button>
                 }
              </td>
              </tr>
            </tbody>
          </table>
          
        </>
        :
        <>
          <h1>No hay productos en el carrito</h1>
          <button className="btn btn-primary p-2">
            <Link to = "/" style={{ textDecoration:'none', color: "white"}}>Regresar al inicio</Link>
          </button>
        </>
      }
      { formVis ? 
        <FormComp 
          confirmPurchase = {confirmPurchase}
          formVis = {formVis}
          setFormVis = {setFormVis}
        />
        : null
      }
    </>
  )
}

export default Cart