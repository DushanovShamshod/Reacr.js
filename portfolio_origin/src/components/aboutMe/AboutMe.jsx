import React from "react";
import "./aboutMe.scss";
import me from "../../assets/img/me.png";
import resume from "../../assets/network/resume.pdf";
import downloadIcon from "../../assets/icons/download.png";
const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="row">
        <div className="col-xl-6 col-sm-12">
          <img className="imgAboutMe w-100" src={me} alt="imgAboutMe" />
        </div>
        <div className="col-xl-6 col-sm-12">
          <h6 className="whoAmI">WHO I AM</h6>
          <h1 className="aboutMe_txt">About Me</h1>
          <p className="about_paragrph w-100">
            Hi! I`m Mustafo Yakubov, and I`m developer who has passion for
            building clean web applications with intuitive functionality. I
            enjoy the process of turning ideas into reality using creative
            solutions. I`m always curious about learning new skills, tools, and
            concepts. In addition to working on various solo full stack
            projects, I have worked with creative teams, which involves daily
            stand-ups and communications, source control, and project
            management.
          </p>
          <div className="aboutBtns">
            <button className="btn-yellow">
              <p>Hire me</p>
            </button>
            <a href={resume} download>
              <button className="download">
                <span>Download CV</span>
                <span>
                  <img className="downloadIcon" src={downloadIcon} alt="" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
