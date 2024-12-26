import { useState } from "react";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-96 border border-gray-300 p-4 rounded-lg">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="username"
            label="Username"
            name="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
          <Input
            id="password"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className="block w-full px-3 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
