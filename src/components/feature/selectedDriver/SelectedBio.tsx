const SelectedBio = ({ text }: { text: string }) => {
  return (
    <div className="mt-4 flex flex-col items-center">
      <h3 className="mb-1 text-slate-700 font-bold text-sm">BIOGRAPHY</h3>
      <p className="text-sm text-center leading-5">{text}</p>
    </div>
  );
};

export default SelectedBio;
