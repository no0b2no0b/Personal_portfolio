import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h2>What Skills I Have</h2>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>CS Fundamentals</h3>
          <div className="skills__content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>C</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>OOPS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Data Structure</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Machine Learning</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of Frontend */}

        <div className="skills__backend">
          <h3>Development</h3>
          <div className="skills__content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
