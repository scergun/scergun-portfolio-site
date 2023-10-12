import { HashLink as Link } from "react-router-hash-link";
import "./css-files/Sidebar2.css";

export const Sidebar2 = () => {
  return (
    <div className="sb2">
      <button className="vertical">
        <ButtonMailto
          label="sametcaglarergun@gmail.com"
          mailto="mailto:sametcaglarergun@gmail.com"
        />
      </button>
      <div className="vl"></div>
    </div>
  );
};

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
