export const Button = ({ lable, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-slate-700 text-white pl-4 pr-4 pt-1 pb-1 w-auto rounded-lg mt-1 transition duration-300 hover:bg-slate-500"
      >
        {lable}
      </button>
    </div>
  );
};
