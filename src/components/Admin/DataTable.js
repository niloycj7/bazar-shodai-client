import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DataTable = props => {

  const {name, price, weight} = props.product

    return (
        <tr>
        <td>{name}</td>
      <td>{weight}gm</td>

      <td>${price}</td>
      <td style={{textAlign: 'center'}}><FontAwesomeIcon icon={faTrash} /></td>
    </tr>
    );
};

export default DataTable;