import React from "react";
import "./education.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Education = () => {
  return (
    <section id="education">
      {/* <h2>What Skills I Have</h2> */}
      <h2>My Education</h2>

      <div className="container education__container">
        <div className="education__frontend">
          <h3>Graduation</h3>
          <div className="education__content">
            <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>Jaypee University of Information Technology, Solan</h4>
                <small className="row1 text-light">2019 - 2023</small>
                <small className="row1 text-light">Degree: B.tech</small>
                <small className="row1 text-light">
                  Major: Computer Science and Engineering
                </small>
                <small className="row1 text-light">CGPA: 8.0</small>
              </div>
            </article>

            {/* <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* End of Frontend */}

        <div className="education__backend">
          <h3>Intermediate</h3>
          <div className="education__content">
            <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>Rao Pahlas Singh Ser. Sec. School, Khatod</h4>
                <small className="row1 text-light">2016 - 2018</small>
                <small className="row1 text-light">Non-Medical</small>
                {/* <small className="row1 text-light">
                  Major: Computer Science and Engineering
                </small> */}
                <small className="row1 text-light">Percentage: 91.8%</small>
              </div>
            </article>

            {/* <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="education_details">
              <BsPatchCheckFill className="education__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
