import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import categories from "./categories";
import users from "./users";
import products from "./products";
import LoginPage from "./pages/LoginPage";
import UsersListPage from "./pages/UsersListPage";
import CategoriesListPage from "./pages/CategoriesListPage";
import AdminProductsListPage from "./pages/AdminProductsListPage";
import UserProfilePage from "./pages/UserProfilePage"

const App = () => {
  const loggedIdUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {loggedIdUser && !loggedIdUser.isAdmin && <UserProfilePage/>}
          {loggedIdUser && loggedIdUser.isAdmin && <AdminProductsListPage />}
          {!loggedIdUser && <LoginPage />}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;