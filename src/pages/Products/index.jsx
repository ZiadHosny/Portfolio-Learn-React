import { useEffect, useState } from 'react';
import './index.css';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return products.length === 0 ? (
    <Spinner animation="border" className="Spinner" />
  ) : (
    <div className="row justify-content-between g-3">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-3 ">
            <Link
              to={`/products/${product.id}`}
              className="link-secondary text-decoration-none"
              style={{ fontSize: '12px' }}
            >
              <Card className="border-0">
                <Card.Img variant="top" src={product.image} className="Image" />
                <Card.Body>
                  <Card.Title className="Title">{product.title}</Card.Title>
                  <Card.Title className="Price">$ {product.price}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
