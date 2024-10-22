const Searchbar = () => {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Search for a driver"
        className="w-full bg-neutral-50 h-16 rounded-xl px-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] focus:outline-primary"
      />
      <button className="absolute right-3 top-3 bg-primary w-10 h-10 text-neutral-100 font-bold rounded-xl hover:scale-[1.02] shadow shadow-transparent transition-all hover:shadow-primary">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Searchbar;
