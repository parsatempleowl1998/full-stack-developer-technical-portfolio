import React from "react";
import { Table, Container, Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AlertMessage from "../components/AlertMessage";

const CategoriesListPage = () => {
  const [categories, setCategories] = React.useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );
  console.log(categories);
  const deleteHandler = (id) => {
    const categoriesListUpdated = categories.filter(
      (category) => category.id != id
    );
    setCategories(categoriesListUpdated);
  };

  return (
    <>
      {categories.length == 0 && (
        <AlertMessage variant="info" message="No category created" />
      )}
      {categories.length > 0 && (
        <Container>
          <LinkContainer to="/admin/category/new">
          <Button className="my-3">Add Category</Button></LinkContainer>
          <Table striped hover bordered className="table-sm">
            <thead>
              <tr class="text-center">
                <th>Id</th>
                <th>Category Name</th>
                <th>Category Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id} class="text-center">
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>
                    <Col>
                    <LinkContainer to={`/admin/category/${category.id}/edit`}>
                      <Button variant="info" className="mb-3">
                        Edit Category
                      </Button>
                    </LinkContainer>
                    </Col>
                   <Col>
                   <Button
                      variant="danger"
                      className="mb-3"
                      onClick={() => deleteHandler(category.id)}
                    >
                      Delete Category
                    </Button>
                   </Col>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};

export default CategoriesListPage;
