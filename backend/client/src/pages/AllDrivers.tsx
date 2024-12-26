import { useEffect, useState } from "react";
import { Driver } from "../shared.types";
import GlobalStyle from "../components/GlobalStyle";
import BackHome from "../components/BackHome";

const AllDrivers = () => {
  const [drivers, setDrivers] = useState<Driver[] | null>(null);
  const [selectedSort, setSelectedSort] = useState("team");
  const [selectedOrder, setSelectedOrder] = useState("asc");

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/drivers?sortBy=team");
      const data = await response.json();
      setDrivers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:8080/drivers?sortBy=${selectedSort}&order=${selectedOrder}`
      );
      const data = await response.json();
      setDrivers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GlobalStyle>
      <div className="container">
        <BackHome />
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="bg-blue-500 p-3 rounded-md text-white mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all"
          >
            Fetch All Drivers
          </button>
          <div className="flex mt-5 space-x-5 items-center">
            <div className="flex items-center justify-center">
              <p className="mr-2">Sort By:</p>
              <select
                className="p-2 border border-gray-400 rounded-md"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="team">Team</option>
                <option value="name">Name</option>
                <option value="wins">Wins</option>
                <option value="championships">Championships</option>
                <option value="pointsScored">Points</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <p className="mr-2">Order:</p>
              <select
                className="p-2 border border-gray-400 rounded-md"
                value={selectedOrder}
                onChange={(e) => setSelectedOrder(e.target.value)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
            <div>
              <input type="checkbox" className="mr-2" disabled />
              <label>Active drivers</label>
            </div>
          </div>
        </form>
        <p className="mt-5">Results:</p>
        {drivers && (
          <table className="border-collapse border border-gray-400 mt-3 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-slate-600 bg-gray-200 text-start">
                  #
                </th>
                <th className="border border-slate-600 text-start">ID</th>
                <th className="border border-slate-600 text-start">Name</th>
                <th className="border border-slate-600 text-start">Team</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver, index) => (
                <tr key={driver.id}>
                  <td className="border border-slate-700">{index + 1}</td>
                  <td className="border border-slate-700">{driver.id}</td>
                  <td className="border border-slate-700">{driver.name}</td>
                  <td className="border border-slate-700">{driver.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </GlobalStyle>
  );
};

export default AllDrivers;
