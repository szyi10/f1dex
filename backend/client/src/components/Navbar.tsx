import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="border-b-2 border-gray-200 bg-white p-4">
      <div className="container flex items-center justify-between space-x-4">
        <h1 className="text-xl font-semibold">F1Dex Dashboard</h1>
        <div className="space-x-4 text-lg">
          <Link to="/dashboard">Home</Link>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
