export const AppBar = () => {
  return (
    <div className="grid grid-cols-3 shadow-xl p-4 rounded-xl shadow-slate-300">
      <h3 className="col-span-2 font-bold">Paytm App</h3>
      <div className="flex justify-end gap-3">
        <h3 className="pt-2">Hello</h3>
        <p className="border-2 rounded-full w-10 h-10 flex justify-center items-center bg-slate-300 cursor-pointer">
          👤
        </p>
      </div>
    </div>
  );
};
