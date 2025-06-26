
import { useEffect, useState } from 'react';
import { getProductsFromPexelsByQuery } from '../services/productsService';
import ProductList from '../components/ProductList';
import { useCart } from '../context/CartContext';
import Seo from '../components/Seo';

const Productos = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('technology');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    getProductsFromPexelsByQuery(query).then((data) => {
      setProducts(data);
      setCurrentPage(1); // resetea al buscar
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) setQuery(searchTerm.trim());
  };

  const handleReset = () => {
    setSearchTerm('');
    setQuery('technology');
  };

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <Seo
        title="Productos | Mi Tienda"
        description="Explorá nuestro catálogo con navegación por página y búsqueda inteligente"
      />

      <h2 className="mb-4">
        🛒 {searchTerm ? `Resultados para: “${query}”` : 'Todos los productos'}
      </h2>

      <form onSubmit={handleSearch} className="mb-3 d-flex gap-2">
        <input
          className="form-control"
          type="text"
          placeholder="Ej: auriculares, cámaras, moda"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary">🔍 Buscar</button>
      </form>

      {searchTerm && (
        <button className="btn btn-outline-secondary mb-3" onClick={handleReset}>
          ← Volver a todos los productos
        </button>
      )}

      <ProductList products={currentProducts} addToCart={addToCart} />

      {/* Paginador */}
      <nav className="mt-4 d-flex justify-content-center gap-2">
        <button
          className="btn btn-outline-secondary"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← Anterior
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-outline-secondary"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente →
        </button>
      </nav>
    </div>
  );
};

export default Productos;

