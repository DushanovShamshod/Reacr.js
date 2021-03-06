import "./skills.scss";
import js from "../../assets/icons/javascript.png";
import react from "../../assets/icons/react.png";
import redux from "../../assets/icons/redux.png";
import github from "../../assets/icons/github.png";
import html from "../../assets/icons/html.png";
import sass from "../../assets/icons/sass.png";
import bootstrap from "../../assets/icons/bootstrap.png";
import figma from "../../assets/icons/figma.png";

const Skills = () => {
  return (
    <section className="skills_row">
      <div className="line"></div>
      <h1 className="title">Skills</h1>
      <div id="row_of_skills" className="row ">
        <div className="col-xl-6 col-sm-12">
          <h1 className="skills_txt">What My Programming Skills Included?</h1>
          <p className="skills_parag">
            I develop simple, intuitive and responsive user interface that helps
            users get things done with less effort and time with those
            technologies.
          </p>
          <button className=" btn-yellow skills_btn mt-4">
            <p>Hire me</p>
          </button>
        </div>

        <div className="col-xl-6 col-sm-12">
          <div className="row skills_position ">
            <div
              title="JavaScript"
              className="col-xl-3 col-sm-6 skills_background"
            >
              <img src={js} alt="js" />
            </div>
            <div
              title="React JS"
              className="col-xl-3 col-sm-6 skills_background "
            >
              <img src={react} alt="react" />
            </div>
            <div title="Redux" className="col-xl-3 col-sm-6 skills_background ">
              <img className="w-100" src={redux} alt="redux" />
            </div>
            <div
              title="Git Hub"
              className="col-xl-3 col-sm-6 skills_background "
            >
              <img src={github} alt="" />
            </div>
          </div>
          <div
            style={{ marginTop: "2rem" }}
            className="row skills_position skilss_top "
          >
            <div title="HTML" className="col-xl-3 col-sm-6 skills_background">
              <img src={html} alt="html" />
            </div>
            <div
              title="SCSS/SASS"
              className="col-xl-3 col-sm-6 skills_background"
            >
              <img src={sass} alt="sass" />
            </div>
            <div className="col-xl-3 col-sm-6 skills_background">
              <img title="Bootstrap" src={bootstrap} alt="bootstrap" />
            </div>
            <div className="col-xl-3 col-sm-6 skills_background">
              <img title="Figma" src={figma} alt="figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
