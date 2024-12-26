import { useEffect, useState } from "react";

const ServerStatus = () => {
  const [health, setHealth] = useState<number>(0);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8080/health");
        setHealth(res.status);
      } catch (err) {
        console.error(err);
      }
    };

    checkHealth();
  }, []);

  if (health !== 200) {
    return (
      <div className="bg-red-500 text-white p-3 rounded-md">
        <p>400 - FAIL</p>
      </div>
    );
  }

  return (
    <div className="bg-green-500 text-white p-3 rounded-md">
      <p>200 - OK</p>
    </div>
  );
};

export default ServerStatus;
