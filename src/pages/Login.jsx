import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { toast } from 'react-toastify';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email === '' || form.password === '') {
      toast.error('Por favor completá todos los campos');
      return;
    }

    login(); // simula login
    toast.success('Sesión iniciada correctamente');
    navigate('/checkout');
  };

  return (
    <>
      <Seo
        title="Ingresar | Mi Tienda"
        description="Accedé a tu cuenta para continuar con la compra"
      />

      <div className="mx-auto" style={{ maxWidth: '400px' }}>
        <h2 className="mb-4">Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              className="form-control"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;


