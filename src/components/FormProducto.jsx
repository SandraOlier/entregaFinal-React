import { useState, useEffect } from 'react';

const initialState = { name: '', price: '', description: '', image: '' };

const FormProducto = ({ onSubmit, productoEdit, cancelEdit }) => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');

  useEffect(() => {
    if (productoEdit) setForm(productoEdit);
  }, [productoEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name) return 'El nombre es obligatorio';
    if (form.price <= 0) return 'El precio debe ser mayor a 0';
    if (form.description.length < 10) return 'Mínimo 10 caracteres en la descripción';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate();
    if (valid) return setError(valid);
    setError('');
    onSubmit(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{productoEdit ? 'Editar' : 'Agregar'} producto</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Precio" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="URL de imagen" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Descripción" />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">{productoEdit ? 'Actualizar' : 'Crear'}</button>
      {productoEdit && <button type="button" onClick={cancelEdit}>Cancelar</button>}
    </form>
  );
};

export default FormProducto;
