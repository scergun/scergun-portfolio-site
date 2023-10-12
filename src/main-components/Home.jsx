import "./css-files/Home.css";
import { HashLink as Link } from "react-router-hash-link";

export const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-container">
        <p className="greeting gradient__text ">Hi, my name is</p>
        <div className="main-part">
          <h1 className="fname">Samet Çağlar Ergün.</h1>
          <h1 className="occupation gradient__text ">
            I am a Junior Frontend Developer.
          </h1>
        </div>
        <span className="summary">
          I am a junior frontend web developer. Currently, I'm focused on
          developing React.js based websites and I recently started learning
          Next.js. I hope my journey on web development never ends!
        </span>
        <Link
          to="https://www.linkedin.com/in/samet-caglar-ergun/"
          target="_blank"
          className="btn-wrapper"
        >
          <button className="to-linkedin">
            Check out my Linkedin account!
          </button>
        </Link>
      </div>
    </div>
  );
};
