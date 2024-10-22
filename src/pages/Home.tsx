import DriversList from "../components/feature/driversList/DriversList";
// import Searchbar from "../components/feature/Searchbar";
import SelectedDriver from "../components/feature/selectedDriver/SelectedDriver";

const Home = () => {
  return (
    <main className="max-w-screen-xl w-full mx-auto mt-8 px-3 flex items-start">
      <div className="w-3/4 ">
        {/* <Searchbar /> */}
        <DriversList />
      </div>
      <div className="w-1/4 ml-5">
        <SelectedDriver />
      </div>
    </main>
  );
};

export default Home;
