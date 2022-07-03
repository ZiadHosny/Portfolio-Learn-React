import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          Portfolio
        </Link>
        <Nav className="justify-content-end">
          <Link to="/" className=" nav-link">
            Home
          </Link>

          <Link to="/support" className="nav-link">
            Support
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/todo-list" className="nav-link">
            Todo-list
          </Link>
          <Link to="/sign-up" className="nav-link">
            Sign Up
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
