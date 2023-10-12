import {
  Github,
  Instagram,
  Twitter,
  Linkedin,
  StackOverflow,
} from "react-bootstrap-icons";
import "./css-files/Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <Link to="https://github.com/scergun" target="_blank">
          <li>
            <Github size={"1.5rem"} />
          </li>
        </Link>
        <Link to="https://www.instagram.com/samethinks" target="_blank">
          <li>
            <Instagram size={"1.5rem"} />
          </li>
        </Link>
        <Link to="https://twitter.com/foxxicute" target="_blank">
          <li>
            <Twitter size={"1.5rem"} />
          </li>
        </Link>
        <Link
          to="https://www.linkedin.com/in/samet-caglar-ergun"
          target="_blank"
        >
          <li>
            <Linkedin size={"1.5rem"} />
          </li>
        </Link>
        <Link to="https://stackoverflow.com/users/22722999" target="_blank">
          <li>
            <StackOverflow size={"1.5rem"} />
          </li>
        </Link>
        <div className="vl"></div>
      </ul>
    </div>
  );
};
