
const API_BASE = 'https://685c4b65769de2bf085c54ed.mockapi.io/productos';
const ENDPOINT = `${API_BASE}/productos`;

export const getProductos = () =>
  fetch(ENDPOINT).then((res) => res.json());

export const getProductoById = (id) =>
  fetch(`${ENDPOINT}/${id}`).then((res) => {
    if (!res.ok) throw new Error('Producto no encontrado');
    return res.json();
  });

export const addProducto = (producto) =>
  fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  }).then((res) => {
    if (!res.ok) throw new Error('Error al crear producto');
    return res.json();
  });

export const updateProducto = (id, producto) =>
  fetch(`${ENDPOINT}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  }).then((res) => {
    if (!res.ok) throw new Error('Error al actualizar producto');
    return res.json();
  });

export const deleteProducto = (id) =>
  fetch(`${ENDPOINT}/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    if (!res.ok) throw new Error('Error al eliminar producto');
    return res.json();
  });

