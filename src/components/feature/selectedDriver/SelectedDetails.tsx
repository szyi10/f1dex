interface Props {
  country: string;
  age: number;
  height: number;
  weight: number;
}

const SelectedDetails = ({ country, age, height, weight }: Props) => {
  return (
    <div className="mt-4 flex justify-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full">
        <div className="flex flex-col items-center">
          <h3 className="mb-1 text-slate-700 font-bold text-sm">COUNTRY</h3>
          <span className="text-sm bg-slate-200 w-full text-center py-1 rounded-xl font-medium text-slate-800">
            {country}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-1 text-slate-700 font-bold text-sm">AGE</h3>
          <span className="text-sm bg-slate-200 w-full text-center py-1 rounded-xl font-medium text-slate-800">
            {age}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-1 text-slate-700 font-bold text-sm">HEIGHT</h3>
          <span className="text-sm bg-slate-200 w-full text-center py-1 rounded-xl font-medium text-slate-800">
            {height}m
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-1 text-slate-700 font-bold text-sm">WEIGHT</h3>
          <span className="text-sm bg-slate-200 w-full text-center py-1 rounded-xl font-medium text-slate-800">
            {weight}Kg
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectedDetails;
