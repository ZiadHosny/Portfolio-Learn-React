import Home from '../pages/Home';
import Counter from '../pages/Counter';
import NavbarComponent from '../components/Navbar/NavbarComponent';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import About from '../pages/About';
import Products from '../pages/Products';
import Product from '../pages/Product';

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
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
