import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import ProductsListPage from "./pages/ProductsListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductsListPage from "./pages/ProductPage";
// import UserCartPage from "./pages/UserCartPage";
import categories from "./categories";
import users from "./users";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import OrdersPage from "./pages/OrdersPage";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import UsersListPage from "./pages/UsersListPage";
import UserEditPage from "./pages/UserEditPage";
import CategoriesListPage from "./pages/CategoriesListPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import EditCategoryPage from "./pages/EditCategoryPage";
import AddUserPage from "./pages/AddUserPage";
import AdminProductsListPage from "./pages/AdminProductsListPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import AdminOrdersListPage from "./pages/AdminOrdersListPage";

const App = () => {
  return (<>
  <LoginPage/>
  </>);
};

export default App;
