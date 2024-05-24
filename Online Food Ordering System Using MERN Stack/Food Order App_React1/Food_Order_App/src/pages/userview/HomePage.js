import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        <h4>Try new cuisine</h4>
        <Row className="g-4">
          {cuisines.map((cuisine) => (
            <Col key={cuisine.id} md={12} sm={12} lg={3}>
              <ItemCard item={cuisine} itemName="cuisine" />
            </Col>
          ))}
        </Row>
      </div>
      <div className="container-fluid">
        <h4>Get inspiration for your order</h4>
        <Row className="g-4">
          {categories.map((category) => (
            <Col key={category.id} md={6} sm={12} lg={3}>
              <ItemCard item={category} itemName="category" />
            </Col>
          ))}
        </Row>
      </div>
      <div className="container-fluid">
        <h4>Available restaurants</h4>
        <Row className="g-4">
          {restaurants.map((restaurant) => (
            <Col key={restaurant.id} md={6} sm={12} lg={3}>
              <ItemCard item={restaurant} itemName="restaurant" />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomePage;
