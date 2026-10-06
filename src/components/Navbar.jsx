import { Link, useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch {
      // si falla la petición, igual se limpia el estado local
    } finally {
      localStorage.removeItem('isLogged');
      navigate('/login');
    }
  };

  return (
    <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
      <Link to="/" className="text-lg font-bold text-white">
        Mi Blog
      </Link>
      <button
        type="button"
        onClick={handleLogout}
        className="rounded bg-slate-600 px-4 py-2 text-sm text-white hover:bg-slate-500"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
