/* eslint-disable @typescript-eslint/no-unused-vars */
import useList from "@hooks/useList";

const Searchbar = () => {
  const { setList } = useList();

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const res = await fetch(
      `http://127.0.0.1:8080/drivers/search?query=${e.target.value}&sortBy=currentSeason.pointScored&order=desc`
    );
    const data = await res.json();
    setList(data);
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search for a driver (by name or team)"
        className="w-full bg-neutral-50 h-16 rounded-xl px-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] focus:outline-blue-500"
      />
      <button className="absolute right-3 top-3 bg-blue-500 w-10 h-10 text-neutral-100 font-bold rounded-xl hover:scale-[1.02] shadow shadow-transparent transition-all hover:shadow-blue-500">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Searchbar;
