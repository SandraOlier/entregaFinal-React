
import { useEffect, useState } from 'react';
import {
  getProductos,
  addProducto,
  updateProducto,
  deleteProducto,
} from '../services/mockApiService';
import Seo from '../components/Seo';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  price: '',
  description: '',
  image: '',
};

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(initialState);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getProductos();
      setProductos(res);
    } catch (e) {
      setError('Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validate = () => {
    if (!form.name) return 'El nombre es obligatorio';
    if (form.price <= 0) return 'El precio debe ser mayor a 0';
    if (form.description.length < 10) return 'La descripción debe tener al menos 10 caracteres';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mensaje = validate();
    if (mensaje) return toast.error(mensaje);

    try {
      if (editingId) {
        await updateProducto(editingId, form);
        toast.success('Producto actualizado');
      } else {
        await addProducto(form);
        toast.success('Producto creado');
      }
      setForm(initialState);
      setEditingId(null);
      fetchData();
    } catch (e) {
      toast.error('Ocurrió un error al guardar el producto');
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('¿Seguro que querés eliminar este producto?');
    if (!confirm) return;
    try {
      await deleteProducto(id);
      toast.warn('Producto eliminado');
      fetchData();
    } catch {
      toast.error('No se pudo eliminar el producto');
    }
  };

  const handleEdit = (producto) => {
    setForm(producto);
    setEditingId(producto.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setForm(initialState);
    setEditingId(null);
  };

  return (
    <div className="container">
      <Seo
        title="Administrador | Mi Tienda"
        description="Gestioná, editá o eliminá productos del catálogo"
      />

      <h2 className="mb-4">🛠️ Gestión de productos</h2>

      <form onSubmit={handleSubmit} className="row g-3 mb-5">
        <div className="col-md-6">
          <input
            className="form-control"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            name="price"
            type="number"
            placeholder="Precio"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>
        <div className="col-md-12">
          <input
            className="form-control"
            name="image"
            placeholder="URL de imagen"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>
        <div className="col-md-12">
          <textarea
            className="form-control"
            name="description"
            placeholder="Descripción"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="col-md-12">
          <button className="btn btn-primary me-2" type="submit">
            {editingId ? 'Actualizar' : 'Agregar'}
          </button>
          {editingId && (
            <button className="btn btn-secondary" type="button" onClick={handleCancel}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      <h3>📦 Lista de productos</h3>

      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <div className="row">
          {productos.map((p) => (
            <div key={p.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={p.image} className="card-img-top" alt={p.name} style={{ objectFit: 'cover', height: 180 }} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text text-muted">${p.price}</p>
                  <p className="card-text">{p.description}</p>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(p)}>
                    Editar
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminProductos;

