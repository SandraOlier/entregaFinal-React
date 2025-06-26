import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => (
  <Container>
    <Row>
      {products.map((product) => (
        <Col
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="mb-4 d-flex"
        >
          {/* d-flex hace que ProductCard se estire verticalmente */}
          <ProductCard product={product} addToCart={addToCart} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProductList;




