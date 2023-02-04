import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../Components/ItemList/index';
import { db } from '../../FireBase/Config';

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const {categoryId}  = useParams()
  console.log(categoryId)

  useEffect(()=> {
    
    const getProducts = async () => {
      let querySnapshot;
      if (categoryId) {
        const q = query(collection(db, "Products"), where("category", "==", categoryId));
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, "Products"));
      }
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data()
        }
        productosFirebase.push(product)
      });
      setProducts(productosFirebase)
    }

    getProducts();


  }, [categoryId])

  console.log(products)
 
  return (
    <div>
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer