import { useFetch } from '../hooks/useFetch';

function HomePage() {
  const { data, isLoading, error } = useFetch('/articles');

  if (isLoading) {
    return (
      <p className="p-8 text-center text-slate-500">Cargando artículos...</p>
    );
  }

  if (error) {
    return <p className="p-8 text-center text-red-600">{error}</p>;
  }

  if (data.length === 0) {
    return (
      <p className="p-8 text-center text-slate-500">
        No hay artículos publicados.
      </p>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold text-slate-800">Artículos</h1>
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
  );
}

export default HomePage;
