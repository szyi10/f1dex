import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <div className="text-gray-500 mt-3 text-sm">
      <Link to="/dashboard" className="text-blue-500 hover:underline">
        {"<-- "}Back to Home
      </Link>
    </div>
  );
}

export default BackHome