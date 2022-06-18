import React from "react";
import "./Home.css";
import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
function Home() {
    return (
        <div className="homepage_container">
      <div className="homepage_left">
        <p className="homepage_left_h1">
          <span className="red_color">Hi,</span> my name is
        </p>
        <p className="homepage_left_h2">Rohit Roy</p>
        <p className="homepage_left_h3">
          Developer at <span className="red_color">Somewhere</span>{" "}
        </p>
        <p className="homepage_left_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          fringilla nec risus eu efficitur. Donec rhoncus nec ligula vel
          accumsan. Phasellus vitae congue nibh, vel aliquam neque. Aliquam eu
          suscipit lorem.{" "}
        </p>
        <div>
          <a href="https://github.com/Roy009" target="_blank">
            <img
              src={githubIcon}
              alt="githubIconimage"
              className="homepage_logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-roy-5a1789193/"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="linkedinIconimage"
              className="homepage_logo"
            />
          </a>
        </div>
        <a href="mailto:rohitroy09062000@gmail.com">
          <button className="homepage_left_button">Get in Touch</button>
        </a>
      </div>
      <div className="homepage_right">
        <img
          src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
          alt="GIF"
        />
      </div>
    </div>
  );
}

export default Home;