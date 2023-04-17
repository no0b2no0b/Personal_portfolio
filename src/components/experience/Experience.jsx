import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      {/* <h2>What Skills I Have</h2> */}
      <h2>My Education</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Graduation</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Jaypee University of Information Technology, Solan</h4>
                <small className="row1 text-light">2019 - 2023</small>
                <small className="row1 text-light">Degree : B.tech</small>
                <small className="row1 text-light">Major : Computer Science and Engineering</small>
                <small className="row1 text-light">CGPA : 8.0</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of Frontend */}

        {/* <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;