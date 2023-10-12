import ButtonMailto from "./Sidebar2";
import "./css-files/Contact.css";

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
    </div>
  );
};
