import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

const ProductCard = ({ product, addToCart }) => (
  <Wrapper>
    <Card>
      <Img src={product.image} alt={product.name} />
      <h5 className="mb-2">{product.name}</h5>
      <p className="text-muted mb-3">${product.price}</p>
      <button className="btn btn-sm btn-success mt-auto" onClick={() => addToCart(product)}>
        <FaCartPlus /> Agregar
      </button>
    </Card>
  </Wrapper>
);

export default ProductCard;





