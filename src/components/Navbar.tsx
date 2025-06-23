import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">IVY</span>
        <div className="ms-auto">
          <button 
            onClick={handleLogout}
            className="btn btn-outline-light"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </nav>
  );
};
