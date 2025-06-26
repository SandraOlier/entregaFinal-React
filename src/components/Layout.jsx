import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Cart from './Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaHome, FaList } from 'react-icons/fa';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${({ active }) => (active ? '#ffc107' : 'white')};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffc107; /* Amarillo Bootstrap */
    text-decoration: underline;
  }
`;

const Layout = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header className="bg-dark text-white p-3 mb-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h4 m-0">Mi Tienda Online</h1>
          <nav className="d-flex gap-4 align-items-center">
            <StyledLink to="/" active={pathname === '/'}>
              <FaHome /> Home
            </StyledLink>
            <StyledLink to="/productos" active={pathname.startsWith('/productos')}>
              <FaList /> Productos
            </StyledLink>
            {isAuthenticated ? (
              <>
                <StyledLink to="/checkout" active={pathname === '/checkout'}>
                  <FaShoppingCart /> Checkout
                </StyledLink>
                <button onClick={handleLogout} className="btn btn-sm btn-outline-light ms-2">
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              <StyledLink to="/login" active={pathname === '/login'}>
                <FaSignInAlt /> Login
              </StyledLink>
            )}
          </nav>
        </div>
      </header>

      <main className="container d-flex flex-column flex-md-row gap-4 mb-5">
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <Cart />
      </main>

      <footer className="bg-dark text-center text-white py-3 mt-auto">
        © 2025 Mi Tienda - Todos los derechos reservados-Sandra Olier 🛒
      </footer>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default Layout;

