import { Link } from "react-router-dom";

const NoResults = () => {
  return (
    <main className="max-w-screen-xl w-full mx-auto mt-8 px-3 flex items-start min-h-[75vh]">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-3xl font-semibold text-slate-900">
          No results found
        </h3>
        <p className="text-slate-800 mt-2 text-center">
          We couldn't find what you searched for. <br /> Try searching again.
        </p>
        <Link to="/" className="mt-2 underline text-sm text-blue-500">
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NoResults;
