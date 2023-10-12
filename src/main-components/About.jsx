import "./css-files/About.css";

export const About = () => {
  return (
    <div className="about-main" id="about">
      <div className="about-wrapper">
        <div className="header">
          <span className="gradient__text">01.</span>
          <h1>About Me</h1>
          <hr />
        </div>
        <div className="content">
          <div className="content-paragraphs">
            <p>
              Hello, I'm Samet Çağlar Ergün, a 25-year-old Junior Frontend Web
              Developer. I completed my degree in journalism at Sakarya
              University, but my journey into the world of programming began
              during my final year of studies and I've been captivated ever
              since.
            </p>
            <p>
              For the past 8 months, I've been immersing myself in the world of
              coding. I started with Python and soon transitioned to web
              development, picking up JavaScript, CSS, and HTML along the way.
              After honing my JavaScript skills, I felt ready to dive into a
              frontend framework, and that's when I embarked on my journey with
              React. It's been roughly 3 months since I started working with
              React, and I've been developing projects with it.
            </p>
            <p>
              I kick-started my coding journey with Patika.dev's programs and
              continued to expand my knowledge by exploring platforms like Stack
              Overflow, YouTube, and Udemy. I'm an avid film enthusiast,
              particularly drawn to science fiction novels. In my spare time,
              you'll find me on the ping pong table, as I actively engage in the
              sport. I excel in team environments, having taken on various
              organizational roles during both my university and personal life.
              I believe I possess strong communication skills and am a quick
              learner.
            </p>
            <p>
              Looking ahead, I aspire to secure a position at a corporate
              company, as I'm eager to gain valuable corporate experience. I'm
              confident in my skills and envision myself continuing in this
              field until the twilight of my career.
            </p>
          </div>
          <div className="img-container">
            <div className="image"></div>
          </div>
        </div>
        <div className="skill-list">
          <ul className="skill-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
