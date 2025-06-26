import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductoById } from '../services/mockApiService';
import { useCart } from '../context/CartContext';
import Seo from '../components/Seo';

const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    getProductoById(id)
      .then(setProducto)
      .catch(() => setError('No se encontró el producto'));
  }, [id]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!producto) return <p>Cargando producto...</p>;

  return (
    <>
      <Seo
        title={`${producto.name} | Mi Tienda`}
        description={producto.description?.slice(0, 120) || 'Detalle del producto'}
      />

      <div className="text-center">
        <h2>{producto.name}</h2>
        <img
          src={producto.image}
          alt={producto.name}
          className="img-fluid my-3"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <p className="fs-5">💰 Precio: ${producto.price}</p>
        <p className="text-muted">{producto.description}</p>

        <button className="btn btn-success mt-3 me-2" onClick={() => addToCart(producto)}>
          Agregar al carrito
        </button>

        <button className="btn btn-secondary mt-3" onClick={() => navigate('/productos')}>
          ← Volver al catálogo
        </button>
      </div>
    </>
  );
};

export default DetalleProducto;

