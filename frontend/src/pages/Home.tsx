import {
  DriverPopup,
  DriversLists,
  Searchbar,
  SelectedDriver,
} from "@components/feature";

const Home = () => {
  return (
    <main className="max-w-screen-xl w-full mx-auto mt-8 px-3 flex items-start">
      <div className="w-full lg:w-3/4 ">
        <Searchbar />
        <DriversLists />
      </div>
      <div className="hidden lg:block w-1/4 ml-5 sticky -top-1/3">
        <SelectedDriver />
      </div>
      <DriverPopup />
    </main>
  );
};

export default Home;
