import { Link } from "react-router";

const Notfound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">
          Error 404
        </p>

        <h1 className="mt-4 text-6xl font-extrabold text-gray-900">
          Page not found
        </h1>

        <p className="mt-4 text-gray-500">
          The page you're looking for doesn't exist, may have been moved, or the
          link is broken.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Go back home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Go back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Notfound;
