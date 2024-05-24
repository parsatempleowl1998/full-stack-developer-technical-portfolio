import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/userview/HomePage";
import AdminDashboard from "./pages/adminview/AdminDashboard";

const App = () => {
  /* Get logged in user's info from Session Storage */
  const loggedIdUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* If user is logged in and user is not admin then display home page */}
          {loggedIdUser && !loggedIdUser.isAdmin && <HomePage />}
          {/* If user is logged in and user is admin then display admin dashboard page */}
          {loggedIdUser && loggedIdUser.isAdmin && <AdminDashboard />}
          {/* If user is not logged in then display login page */}
          {!loggedIdUser && <LoginPage />}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
