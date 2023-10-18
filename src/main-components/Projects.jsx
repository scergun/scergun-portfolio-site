import "./css-files/Projects.css";
import { Folder2, BoxArrowUpRight } from "react-bootstrap-icons";
import { HashLink as Link } from "react-router-hash-link";

export const Projects = () => {
  return (
    <div className="container " id="projects">
      <div className="wrapper no-res">
        <div className="header">
          <span className="gradient__text">02.</span>
          <h1>The Things I've Made</h1>
          <hr />
        </div>
        <div className="project-container">
          <Link
            to="https://github.com/scergun/many-things-app-react"
            target="_blank"
          >
            <div className="img-container1">
              <div className="image1"></div>
            </div>
          </Link>
          <div className="desc-container">
            <span className="gradient__text">Featured Project</span>
            <h1>Many Things React App</h1>
            <div className="desc">
              <p>
                Welcome to the "Many Things React App," a versatile and
                feature-rich mobile-responsive React application built using
                Vite as the development tool. This project serves as a showcase
                of modern web development technologies, offering a glimpse into
                the power and flexibility of React and related libraries.
              </p>
            </div>
            <ul className="technologies">
              <li>React</li>
              <li>JavaScript</li>
              <li>Context API</li>
              <li>React Router</li>
              <li>Custom Hooks</li>
            </ul>
            <Link
              to="https://scergun.github.io/many-things-app-react/"
              target="_blank"
              className="navbar-list-item-resume1"
            >
              <button className="resume1 p-btn1">
                Check it on GitHub Pages
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper wrapper-left no-res">
        <div className="project-container p-c-left">
          <div className="desc-container d-c-left">
            <span className="gradient__text">Featured Project</span>
            <h1>Fantasy Clicker Game</h1>
            <div className="desc desc-left">
              <p>
                This project is a simple click-based game developed for testing
                purposes. Please note that the game does not have balanced
                gameplay, and it ends after reaching level 20.This game is a
                basic clicker-style game where players earn points by clicking
                on enemies and progress by hiring and upgrading heroes.
              </p>
            </div>
            <ul className="technologies t-left">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <Link
              to="https://scergun.github.io/fantasy-clicker-game/"
              target="_blank"
              className="navbar-list-item-resume2"
              href="#"
            >
              <button className="resume1 b-left">Play the game!</button>
            </Link>
          </div>
          <Link
            to="https://github.com/scergun/fantasy-clicker-game"
            target="_blank"
          >
            <div className="img-container1 ">
              <div className="image1 img-left"></div>
            </div>
          </Link>
        </div>
      </div>
      <div className="wrapper no-res">
        <div className="project-container">
          <Link
            to={"https://github.com/scergun/Custom-Disco-Lights"}
            target="_blank"
          >
            <div className="img-container1">
              <div className="image1 img-right"></div>
            </div>
          </Link>
          <div className="desc-container">
            <span className="gradient__text">Featured Project</span>
            <h1>Custom Disco Lights</h1>
            <div className="desc d-right">
              <p>
                "Custom Disco Lights" is an exciting web application that allows
                users to create mesmerizing disco lights on their screens using
                different color palettes. With this project, users can immerse
                themselves in vibrant and dynamic disco light displays, where
                they have the freedom to customize the lights' frequency (speed)
                to their preference.
              </p>
            </div>
            <ul className="technologies">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>

            <Link
              to={"https://scergun.github.io/Custom-Disco-Lights/"}
              target="_blank"
              className="navbar-list-item-resume1"
            >
              <button className="resume1 b-right">Give it a try!</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper responsive">
        <div className="header">
          <span className="gradient__text">02.</span>
          <h1>The Things I've Made</h1>
          <hr />
        </div>
        <div className="project-container">
          <div className="desc-container">
            <span className="gradient__text">Featured Project</span>
            <h1>Many Things React App</h1>
            <div className="desc">
              <p>
                Welcome to the "Many Things React App," a versatile and
                feature-rich mobile-responsive React application built using
                Vite as the development tool. This project serves as a showcase
                of modern web development technologies, offering a glimpse into
                the power and flexibility of React and related libraries.
              </p>
            </div>
            <ul className="technologies">
              <li>React</li>
              <li>JavaScript</li>
              <li>Context API</li>
              <li>React Router</li>
              <li>Custom Hooks</li>
            </ul>
          </div>
          <div className="background-img"></div>
          <Link
            to="https://github.com/scergun/many-things-app-react"
            target="_blank"
          ></Link>
        </div>
      </div>
      <div className="wrapper responsive project-2">
        <div className="project-container">
          <div className="desc-container ">
            <span className="gradient__text">Featured Project</span>
            <h1>Fantasy Clicker Game</h1>
            <div className="desc">
              <p>
                This project is a simple click-based game developed for testing
                purposes. Please note that the game does not have balanced
                gameplay, and it ends after reaching level 20.This game is a
                basic clicker-style game where players earn points by clicking
                on enemies and progress by hiring and upgrading heroes.
              </p>
            </div>
            <ul className="technologies">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="background-img"></div>
          <Link
            to="https://github.com/scergun/many-things-app-react"
            target="_blank"
          ></Link>
        </div>
      </div>
      <div className="wrapper responsive">
        <div className="project-container">
          <div className="desc-container">
            <span className="gradient__text">Featured Project</span>
            <h1>Custom Disco Lights</h1>
            <div className="desc">
              <p>
                "Custom Disco Lights" is an exciting web application that allows
                users to create mesmerizing disco lights on their screens using
                different color palettes. With this project, users can immerse
                themselves in vibrant and dynamic disco light displays, where
                they have the freedom to customize the lights' frequency (speed)
                to their preference.
              </p>
            </div>
            <ul className="technologies">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="background-img"></div>
          <Link
            to="https://github.com/scergun/many-things-app-react"
            target="_blank"
          ></Link>
        </div>
      </div>

      <div className="cards-wrapper">
        <h1>Other Projects</h1>
        <Link
          to={"https://github.com/scergun?tab=repositories"}
          target="_blank"
          className="top-span"
        >
          to GitHub repositories
        </Link>
        <ul className="cards-list">
          <Link
            to={"https://github.com/scergun/Tic-Tac-Toe-Lo-Fi-Edition"}
            target="_blank"
            className="link-dec"
          >
            <li className="card-item">
              <div className="card-item-container">
                <div className="emoji-row">
                  <Folder2 className={"icon"} size={"3rem"} />
                  <BoxArrowUpRight
                    className={"icon"}
                    size={"1.4rem"}
                    fontWeight={"bold"}
                  />
                </div>
                <div className="card-content">
                  <h3>Tic-Tac-Toe Lo-Fi Edition</h3>
                  <p>
                    This project is an interactive web application that features
                    a tic-tac-toe (XOX) game played against an AI opponent.
                  </p>
                  <ul className="techs">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
          <Link
            to={"https://github.com/scergun/Cozy-Tasks"}
            target="_blank"
            className="link-dec"
          >
            <li className="card-item">
              <div className="card-item-container">
                <div className="emoji-row">
                  <Folder2 className={"icon"} size={"3rem"} />
                  <BoxArrowUpRight
                    className={"icon"}
                    size={"1.4rem"}
                    fontWeight={"bold"}
                  />
                </div>
                <div className="card-content">
                  <h3>Cozy Tasks</h3>
                  <p>
                    "Cozy Tasks" is a delightful web application that serves as
                    your personal task and note manager, providing you with a
                    cozy and organized space to keep track of your to-dos,
                    notes, and tasks.
                  </p>
                  <ul className="techs">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
          <Link
            to={"https://github.com/scergun/Rock-Paper-Scissors-Lo-fi-Edition"}
            target="_blank"
            className="link-dec"
          >
            <li className="card-item">
              <div className="card-item-container">
                <div className="emoji-row">
                  <Folder2 className={"icon"} size={"3rem"} />
                  <BoxArrowUpRight
                    className={"icon"}
                    size={"1.4rem"}
                    fontWeight={"bold"}
                  />
                </div>
                <div className="card-content">
                  <h3>Rock-Paper-Scissors Lo-fi Edition</h3>
                  <p>
                    his is a simple web-based implementation of the classic game
                    Rock Paper Scissors, with a charming lo-fi aesthetic.
                  </p>
                  <ul className="techs">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
          <Link
            to={"https://github.com/scergun/Cloudy-Clock"}
            target="_blank"
            className="link-dec"
          >
            <li className="card-item">
              <div className="card-item-container">
                <div className="emoji-row">
                  <Folder2 className={"icon"} size={"3rem"} />
                  <BoxArrowUpRight
                    className={"icon"}
                    size={"1.4rem"}
                    fontWeight={"bold"}
                  />
                </div>
                <div className="card-content">
                  <h3>Cloudy-Clock</h3>
                  <p>
                    "Cloudy Clock" is a simple and delightful web application
                    that brings the joy of a cozy digital clock to your screen.
                  </p>
                  <ul className="techs">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
          <Link
            to={"https://github.com/scergun/Nnotes"}
            target="_blank"
            className="link-dec"
          >
            <li className="card-item">
              <div className="card-item-container">
                <div className="emoji-row">
                  <Folder2 className={"icon"} size={"3rem"} />
                  <BoxArrowUpRight
                    className={"icon"}
                    size={"1.4rem"}
                    fontWeight={"bold"}
                  />
                </div>
                <div className="card-content">
                  <h3>Nnotes </h3>
                  <p>It's just a basic to-do list which also looks cool</p>
                  <ul className="techs">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
          <Link
            to={"https://github.com/scergun/youtube-clone"}
            target="_blank"
            className="link-dec"
          >
            <li className="card-item">
              <div className="card-item-container">
                <div className="emoji-row">
                  <Folder2 className={"icon"} size={"3rem"} />
                  <BoxArrowUpRight
                    className={"icon"}
                    size={"1.4rem"}
                    fontWeight={"bold"}
                  />
                </div>
                <div className="card-content">
                  <h3>Youtube Visual Clone</h3>
                  <p>
                    This project is a visual clone of YouTube, showcasing the
                    design and layout of the YouTube website.
                  </p>
                  <ul className="techs">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
