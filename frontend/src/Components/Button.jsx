export const Button = ({ lable, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-slate-700 text-white pl-4 pr-4 pt-1 pb-1 w-full rounded-lg mt-3"
      >
        {lable}
      </button>
    </div>
  );
};
