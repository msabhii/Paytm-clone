export const InputBox = ({ label, placeholder, onChange }) => {
  return (
    <>
      <div className="">
        <div className="flex">{label}</div>
        <input placeholder={placeholder} onchange={onChange} className="flex" />
      </div>
    </>
  );
};
