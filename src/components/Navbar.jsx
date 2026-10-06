import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
      <Link to="/" className="text-lg font-bold text-white">
        Mi Blog
      </Link>
    </nav>
  );
}

export default Navbar;
