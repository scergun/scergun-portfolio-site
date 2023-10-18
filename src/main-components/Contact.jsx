import ButtonMailto from "./Sidebar2";
import "./css-files/Contact.css";
import {
  Github,
  Instagram,
  Twitter,
  Linkedin,
  StackOverflow,
} from "react-bootstrap-icons";
import "./css-files/Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";

export const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="wrapper">
        <div className="header">
          <span className="gradient__text">03.</span>
          <h1>Contact Me</h1>
          <hr />
        </div>

        <div className="content-container">
          <span>I am currently</span>
          <div className="header-c">
            <h1>Open To</h1> <h1 className="gradient__text"> Work</h1>
          </div>
          <p className="summary">
            I’m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <button className="resume1">
            <ButtonMailto
              className="mail"
              label="E-mail me!"
              mailto="mailto:sametcaglarergun@gmail.com"
            />
          </button>
        </div>
      </div>
      <div className="sidebar-container-responsive">
        <ul>
          <Link to="https://github.com/scergun" target="_blank">
            <li>
              <Github size={"1.3rem"} />
            </li>
          </Link>
          <Link to="https://www.instagram.com/samethinks" target="_blank">
            <li>
              <Instagram size={"1.3rem"} />
            </li>
          </Link>
          <Link to="https://twitter.com/foxxicute" target="_blank">
            <li>
              <Twitter size={"1.3rem"} />
            </li>
          </Link>
          <Link
            to="https://www.linkedin.com/in/samet-caglar-ergun"
            target="_blank"
          >
            <li>
              <Linkedin size={"1.3rem"} />
            </li>
          </Link>
          <Link to="https://stackoverflow.com/users/22722999" target="_blank">
            <li>
              <StackOverflow size={"1.3rem"} />
            </li>
          </Link>
        </ul>
        <Link
          className="watermark"
          to="https://github.com/scergun"
          target="_blank"
        >
          Built by Samet Çağlar Ergün
        </Link>
      </div>
    </div>
  );
};
