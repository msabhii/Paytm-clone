import { Link } from "react-router-dom";

export const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="mt-3 justify-start">
      <div>{label}</div>
      <Link className="" to={to}>
        {buttonText}
      </Link>
    </div>
  );
};
