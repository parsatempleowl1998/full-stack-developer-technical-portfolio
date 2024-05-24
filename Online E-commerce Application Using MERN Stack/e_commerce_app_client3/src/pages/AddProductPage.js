import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, FormGroup, Form, Dropdown, Image, Container } from "react-bootstrap";
import { set } from "lodash";
import AlertMessage from "../components/AlertMessage";

const AddProductPage = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [imageData, setImageData] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  console.log(categories);

  const products = JSON.parse(localStorage.getItem("products")) || [];

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleImageDataChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageData(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const createProductHandler = (event) => {
    event.preventDefault();

    const newProduct = {
      id: products.length + 1,
      name: name,
      description: description,
      image: imageData,
      category: parseInt(category),
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    setSuccess("Product is created successfully");
  };

  return (
    <>
      <LinkContainer to="/admin/products">
        <Button variant="primary" className="my-3">
          Show Products List
        </Button>
      </LinkContainer>
      {success && <AlertMessage variant="success" message={success} />}
      <Container>
        {imageData && (
          <div className="text-center">
            <Image src={imageData} width={200} height={200} rounded></Image>
          </div>
        )}
      </Container>
      <Form onSubmit={createProductHandler}>
        <FormGroup controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => handleNameChange(e)}
          ></Form.Control>
        </FormGroup>
        <FormGroup controlId="description" className="my-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter description"
            value={description}
            onChange={(e) => handleDescriptionChange(e)}
          ></Form.Control>
        </FormGroup>
        <FormGroup controlId="price" className="my-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            min={0}
            placeholder="Enter Price"
            value={price}
            onChange={(e) => handlePriceChange(e)}
          ></Form.Control>
        </FormGroup>
        <FormGroup controlId="quantity" className="my-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            min={0}
            placeholder="Enter Quantity In Stock"
            value={quantity}
            onChange={(e) => handleQuantityChange(e)}
          ></Form.Control>
        </FormGroup>
        {/* <FormGroup controlId="category" className="my-3">
          <Form.Label>Category</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="category">
              Select Category
            </Dropdown.Toggle>
          </Dropdown>
          <Dropdown.Menu>
            {categories.length > 0 &&
              categories.map((category) => {
                console.log(category);
                <Dropdown.Item
                  accessKey={category.id}
                  onClick={(e) => handleCategoryChange(e)}
                >
                  {category.name}
                </Dropdown.Item>;
              })}
          </Dropdown.Menu>
        </FormGroup> */}
        <FormGroup controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => handleCategoryChange(e)}
          ></Form.Control>
        </FormGroup>
        <FormGroup controlId="image" className="my-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => handleImageDataChange(e)}
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          {" "}
          Add Product{" "}
        </Button>
      </Form>
    </>
  );
};

export default AddProductPage;
