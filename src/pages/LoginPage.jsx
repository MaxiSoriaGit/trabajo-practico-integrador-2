import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from '../hooks/useForm';

const INITIAL_VALUES = { email: '', password: '' };

function LoginPage() {
  const { form, handleInputChange } = useForm(INITIAL_VALUES);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setMessage('');

      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        localStorage.setItem('isLogged', 'true');
        navigate('/');
        return;
      }

      const data = await response.json();
      setMessage(data.message);
    } catch {
      setMessage('No se pudo conectar con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow"
      >
        <h1 className="mb-6 text-2xl font-bold text-slate-800">
          Iniciar sesión
        </h1>

        {message && (
          <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {message}
          </p>
        )}

        <label className="mb-4 block">
          <span className="text-sm text-slate-700">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="mb-6 block">
          <span className="text-sm text-slate-700">Contraseña</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Cargando...' : 'Ingresar'}
        </button>

        <p className="mt-4 text-center text-sm text-slate-600">
          ¿No tenés cuenta?{' '}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Registrate
          </Link>
        </p>
      </form>
    </main>
  );
}

export default LoginPage;
