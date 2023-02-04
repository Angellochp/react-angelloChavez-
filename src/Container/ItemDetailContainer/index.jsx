import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../Components/ItemDetail/index';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../FireBase/Config';
import  {MagnifyingGlass} from 'react-loader-spinner';



const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  useEffect(()=> {

 
    const getProduct = async () => {
      const docRef = doc(db, "Products", id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(productDetail);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getProduct();
  
  }, [id])

  return (
    <div>
    {
      
        Object.keys(detail).length===0?
        <>
        <div className='col-md-1 mx-auto'>
        <h2>Cargando...</h2>
        <MagnifyingGlass
        
        visible={true}
        height="200"
        width="200"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#fb' 
        />
        </div>
        </>
        :
      
        <ItemDetail detail={detail}/>
    }
      </div>
  )
}

export default ItemDetailContainer
