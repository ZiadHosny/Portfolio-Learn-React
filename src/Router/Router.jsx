import Home from '../pages/Home';
import Support from '../pages/Support';
import NavbarComponent from '../components/Navbar/NavbarComponent';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Products from '../pages/Products';
import Product from '../pages/Products/Product';
import Todo from '../pages/Todo';
import SignUp from '../pages/register';

const Router = () => {
  return (
    <BrowserRouter basename='Portfolio-Learn-React'>
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/support" element={<Support />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/todo-list" element={<Todo />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
