
import React, { useContext } from 'react'
import { Shop } from '../../Context/shopProvider';


const TableRow = ({product}) => {
    const imagenCarro = {height: '100px',}
    const {handleDelete,} = useContext (Shop);
    

  return (
    <tr>
          <th scope="row">{product.id}</th>
          <td><img src={product.image} alt="table-row" style={imagenCarro}></img></td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td><button onClick={() => handleDelete(product.id)}>Borrar item</button></td>  
    </tr>
  )
}

export default TableRow
