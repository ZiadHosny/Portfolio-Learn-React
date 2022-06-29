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

  return products.length == 0 ? (
    <Spinner animation="border" className="Spinner" />
  ) : (
    <div className="row justify-content-between">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-4 ">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} className="Image" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-success"
                >
                  Add To Card
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
