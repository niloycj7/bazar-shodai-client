import React from 'react';
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
const SingleProduct = (props) => {
    const {name, imageURL, price, weight} = props.product

    console.log(imageURL)

    return (
        <Card className="w-100">
    <img src={imageURL}width="30%"  alt=""/>
    <Card.Body className="d-flex flex-column p-2">
      <Card.Title>{name}</Card.Title>
      <div className="d-flex">
          <h3>${price}</h3>
          <h5>{weight}gm</h5>
          <button>BUY NOW</button>
      </div>
    </Card.Body>
  </Card>
    );
};

export default SingleProduct;