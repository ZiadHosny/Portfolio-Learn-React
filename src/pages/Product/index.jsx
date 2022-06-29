import { useParams } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './index.css';

const Product = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  return !product ? (
    <Spinner animation="border" className="Spinner" />
  ) : (
    <div>
      <Card>
        <Card.Img variant="top" src={product.image} className="Img" />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
