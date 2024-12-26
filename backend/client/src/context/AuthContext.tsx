import { createContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

// AuthContext is used to provide authentication state and functions to the component tree.
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// AuthProvider component provides authentication context to its children components.
// It manages the authentication state and provides login and logout functions.
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const verifyToken = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8080/auth/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401) {
          alert("Unauthorized");
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          navigate("/");
        }

        if (!res.ok) {
          throw new Error("Failed to verify token");
        }

        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/");
      }
    };

    if (token) {
      verifyToken();
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [navigate]);

  const login = async (username: string, password: string) => {
    try {
      const res = await fetch("http://127.0.0.1:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      if (!data.token) {
        throw new Error("Token not found in response");
      }

      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
