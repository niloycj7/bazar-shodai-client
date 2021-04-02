import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DataTable = props => {

  const {name, price, weight, _id} = props.product
  const deleteProduct = (id) => {
    fetch(`https://warm-mountain-71140.herokuapp.com/delete/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                })
  }

    return (
        <tr>
        <td>{name}</td>
      <td>{weight}gm</td>

      <td>${price}</td>
      <td style={{textAlign: 'center'}}><button onClick={() => deleteProduct(_id)}><FontAwesomeIcon icon={faTrash} /></button></td>
    </tr>
    );
};

export default DataTable;