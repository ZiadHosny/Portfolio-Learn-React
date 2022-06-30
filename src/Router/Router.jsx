import Home from '../pages/Home';
import Counter from '../pages/Counter';
import NavbarComponent from '../components/Navbar/NavbarComponent';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import About from '../pages/About';
import Products from '../pages/Products';
import Product from '../pages/Products/Product';
import Todo from '../pages/Todo';

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/todo-list" element={<Todo />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
