import { useEffect } from 'react';
import './index.css';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProducts } from '../../redux/features/productsSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const Products = () => {
  const dispatch = useDispatch();

  const { loading, products } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return loading ? (
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
