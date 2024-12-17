const DriverBiography = ({ data }: { data: string[] }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <span className="mb-1 text-slate-700 font-bold text-base uppercase">
        Biography
      </span>
      {data.map((text, index) => (
        <p key={index} className="first-of-type:mt-0 mt-3 text-slate-800">
          {text}
        </p>
      ))}
    </div>
  );
};

export default DriverBiography;
