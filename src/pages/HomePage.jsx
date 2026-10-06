import Navbar from '../components/Navbar';
import { useFetch } from '../hooks/useFetch';

function HomePage() {
  const { data, isLoading, error } = useFetch('/articles');

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Artículos</h1>

        {isLoading && <p className="text-slate-500">Cargando artículos...</p>}

        {error && <p className="text-red-600">{error}</p>}

        {!isLoading && !error && data.length === 0 && (
          <p className="text-slate-500">No hay artículos publicados.</p>
        )}

        <ul className="flex flex-col gap-4">
          {data.map((article) => (
            <li
              key={article.id}
              className="rounded-lg border border-slate-200 p-4 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-800">
                {article.title}
              </h2>
              <p className="mt-2 text-slate-600">{article.excerpt}</p>
              <p className="mt-3 text-sm text-slate-400">
                Por {article.author.username}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
