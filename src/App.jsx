import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminProductos from './pages/AdminProductos';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="producto/:id" element={<DetalleProducto />} />
          <Route path="login" element={<Login />} />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h2>❌ Página no encontrada</h2>} />
        </Route>
<Route
  path="admin"
  element={
    <ProtectedRoute>
      <AdminProductos />
    </ProtectedRoute>
  }
/>


      </Routes>
    </BrowserRouter>
  );
};

export default App;
