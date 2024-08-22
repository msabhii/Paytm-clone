export const AppBar = () => {
  return (
    <div className="grid grid-cols-3 shadow-xl p-4 rounded-xl shadow-slate-300">
      <h3 className="col-span-2 font-bold ">Paytm App</h3>
      <div className="flex justify-end gap-3 cursor-pointer">
        <h3 className="pt-2 font-semibold">Users</h3>
        <p className="rounded-full w-10 h-10 flex justify-center items-center bg-slate-300 transition duration-300 hover:bg-slate-400 ">
          👤
        </p>
      </div>
    </div>
  );
};
