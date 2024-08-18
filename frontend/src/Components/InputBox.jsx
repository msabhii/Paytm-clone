export const InputBox = ({ label, placeholder, onChange }) => {
  return (
    <>
      <div className="mt-4">
        <div className="flex font-semibold">{label}</div>
        <input
          placeholder={placeholder}
          onChange={onChange}
          className="flex border-2 p-2 w-full rounded-lg font-light"
        />
      </div>
    </>
  );
};
