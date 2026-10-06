import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from '../hooks/useForm';

const INITIAL_VALUES = {
  username: '',
  email: '',
  password: '',
  first_name: '',
  last_name: '',
};

function RegisterPage() {
  const { form, handleInputChange, handleReset } = useForm(INITIAL_VALUES);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setErrors([]);

      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        handleReset();
        navigate('/login');
        return;
      }

      const data = await response.json();
      setErrors(Array.isArray(data) ? data : [data.message]);
    } catch {
      setErrors(['No se pudo conectar con el servidor']);
    } finally {
      setIsLoading(false);
    }
  };

  const FIELDS = [
    { name: 'username', label: 'Usuario', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Contraseña', type: 'password' },
    { name: 'first_name', label: 'Nombre', type: 'text' },
    { name: 'last_name', label: 'Apellido', type: 'text' },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow"
      >
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Crear cuenta</h1>

        {errors.length > 0 && (
          <ul className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        {FIELDS.map((field) => (
          <label key={field.name} className="mb-4 block">
            <span className="text-sm text-slate-700">{field.label}</span>
            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleInputChange}
              className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
            />
          </label>
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Cargando...' : 'Registrarme'}
        </button>

        <p className="mt-4 text-center text-sm text-slate-600">
          ¿Ya tenés cuenta?{' '}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Ingresá
          </Link>
        </p>
      </form>
    </main>
  );
}

export default RegisterPage;
