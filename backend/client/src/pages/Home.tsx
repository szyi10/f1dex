import GlobalStyle from "../components/GlobalStyle";
import ServerStatus from "../components/ServerStatus";

const Home = () => {
  return (
    <GlobalStyle>
      <div className="container mt-5">
        <ServerStatus />
        <h1 className="text-3xl font-semibold mt-2 text-gray-800">
          Welcome to the Home Page
        </h1>
        <p className="mt-3 text-gray-600">
          Choose one of the options from the navigation bar or below to get
          started.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>
            <a href="/all-drivers" className="text-blue-500 hover:underline">
              view all drivers
            </a>
          </li>
          <li>
            <a href="/dashboard" className="text-gray-500 hover:underline">
              update data after race
            </a>
          </li>
          <li>
            <a href="/dashboard" className="text-gray-500 hover:underline">
              open new season
            </a>
          </li>
          <li>
            <a href="/dashboard" className="text-gray-500 hover:underline">
              add driver
            </a>
          </li>
          <li>
            <a href="/dashboard" className="text-gray-500 hover:underline">
              change driver status
            </a>
          </li>
        </ul>
      </div>
    </GlobalStyle>
  );
};

export default Home;
