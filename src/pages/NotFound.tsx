import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="max-w-screen-xl w-full mx-auto mt-8 px-3 flex items-start min-h-[75vh]">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-9xl font-bold text-slate-950">404</h2>
        <h3 className="text-2xl font-medium text-slate-900">
          Oops! Page not found
        </h3>
        <p className="text-slate-800 mt-3">
          The page you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="mt-3 bg-blue-500 text-neutral-100 rounded-xl py-2 px-5 hover:scale-[1.02] shadow shadow-transparent transition-all hover:shadow-sky-500"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
