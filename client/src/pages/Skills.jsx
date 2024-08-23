import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <section id="skills" className="section ">
      <div className="container py-5 ">
        <h2 className="text-white mb-5 text-center fs-1 mb-4">
          {" "}
          <span className="border-bottom  rounded-4 p-2  border-2 text-shadow">
            Skills
          </span>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 fst-italic fw-bold">
          <div className="col  " data-aos="fade-up">
            <div className="card h-100 border-0  p-4 skillCard bg-dark">
              <div className="card-body text-center">
                <i className="fas fa-code mb-3 fa-3x text-primary fs-1"></i>
                <h5 className="card-title fs-3 fw-bold">
                  Frontend Development
                </h5>
                <p className="card-text fs-5">HTML, CSS, JavaScript, React</p>
                <div>
                  <ProgressBar label="HTML" value={80} color="bg-success" />
                  <ProgressBar
                    label="CSS"
                    value={70}
                    color="bg-info"
                    textColor="text-dark"
                  />
                  <ProgressBar
                    label="JavaScript"
                    value={85}
                    color="bg-warning"
                    textColor="text-dark"
                  />
                  <ProgressBar label="React.js" value={80} color="bg-danger" />
                </div>
              </div>
            </div>
          </div>
          <div className="col " data-aos="fade-down">
            <div className="card h-100 border-0 skillCard p-4 bg-dark">
              <div className="card-body text-center">
                <i className="fas fa-database fa-3x mb-3 text-primary"></i>
                <h5 className="card-title fs-3 fw-bold">Backend Development</h5>
                <p className="card-text fs-5">Node.js, Express, MongoDB</p>
                <div>
                  <ProgressBar label="Node.js" value={75} color="bg-success" />
                  <ProgressBar
                    label="Express"
                    value={70}
                    color="bg-info"
                    textColor="text-dark"
                  />
                  <ProgressBar
                    label="MongoDB"
                    value={80}
                    color="bg-warning"
                    textColor="text-dark"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col " data-aos="fade-up">
            <div className="card h-100 border-0 skillCard p-4 bg-dark">
              <div className="card-body text-center">
                <i className="fas fa-server fa-3x mb-3 text-primary"></i>
                <h5 className="card-title fs-3 fw-bold">DevOps</h5>
                <p className="card-text fs-5">Docker, Kubernetes, AWS</p>
                <div>
                  <ProgressBar label="Docker" value={80} color="bg-success" />
                  <ProgressBar
                    label="Kubernetes"
                    value={75}
                    color="bg-info"
                    textColor="text-dark"
                  />
                  <ProgressBar
                    label="AWS"
                    value={85}
                    color="bg-warning"
                    textColor="text-dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
