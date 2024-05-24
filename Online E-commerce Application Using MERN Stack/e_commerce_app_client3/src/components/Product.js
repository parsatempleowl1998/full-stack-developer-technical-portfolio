import React from "react";
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className="p-3 my-3 rounded">
    <Link to={`/product/${product.id}`}>
      <Card.Img variant="top" src={product.image} width={100} height={300} />
    </Link>
    <Card.Body>
      <Link to={`/product/${product.id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as="h3">${product.price}</Card.Text>
    </Card.Body>
  </Card>
)};

export default Product;
