import { Link } from "react-router-dom";

export const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="mt-3 flex justify-center gap-1">
      <div>{label}</div>
      <Link className="underline" to={to}>
        {buttonText}
      </Link>
    </div>
  );
};
