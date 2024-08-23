import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <section id="about" className="section mb-4">
      <div className="container " data-aos="fade-up-right">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative box-shadow">
          <h1 className="text-center text-white fw-bold fst-italic my-2  p-2">
            {" "}
            <span className="border-bottom text-shadow rounded-4 p-2 border-2">
              About Me
            </span>
          </h1>
          <div className="col-auto d-none d-lg-block">
            <img src="/logo2.png" alt="logo" />
          </div>
          <div className="col p-4 d-flex flex-column position-static">
            <div div className="container py-4">
              <h1 className="fs-1 fw-bold text-primary">I'm Yatendra </h1>
              <h2 className="text-white fs-4">Full Stack Developer</h2>
              <p className="lead text-white fst-italic">
                I am Full Stack Web Developer specializing in backend
                development and DevOps. With expertise in MERN stack and a
                passion for Node.js, I'm dedicated to crafting efficient and
                scalable software solutions. Let's build something great
                together.
              </p>
              <ul className="list-group">
                <li className="list-group-item my-2  bg-dark text-white fw-bold">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:yatendrayadav2832@gmail.com">
                    yatendrayadav2832@gmail.com
                  </a>
                </li>
                <li className="list-group-item my-2  bg-dark text-white fw-bold">
                  <strong>Place:</strong> Ghaziabad, India 201001
                </li>
              </ul>
              <button className="btn btn-outline-warning btn-lg my-3  ">
                <a
                  href="/Resume.pdf"
                  className="  d-flex align-items-center text-decoration-none text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download me-2 "></i> Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
