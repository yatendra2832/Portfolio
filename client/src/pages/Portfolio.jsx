import React from "react";
import "./portfolio.css"; // Create and import your custom CSS
import TypedSkills from "./TypedSkills";
import { Link, animateScroll as scroll } from "react-scroll";

const Portfolio = () => {
  return (
    <section id="home" className="section">
      <div className="portfolio-container">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            {/* <a
              className="navbar-brand text-warning fst-italic fw-bold fs-2 "
              href="/home"
            >
              {"<Yatendra />"}
            </a> */}
            <Link
              className="navbar-brand text-warning fst-italic fw-bold fs-2 links"
              to="home"
            >
              {"<Yatendra/>"}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar2"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar2">
              <ul className="navbar-nav ms-auto d-flex justify-content-between">
                <li className="nav-item fw-bold ">
                  <Link
                    className="nav-link text-warning"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container text-center">
          <div className="row align-items-center vh-100">
            <div className="col-md-6 order-md-1 text-md-right">
              {" "}
              {/* Yatendra section */}
              <h1 className="display-5 fw-bold">Hi There</h1>
              <h1 className="text-primary text-shadow display-3 fw-bold">
                {" "}
                I'm Yatendra Singh
              </h1>
              {/* <h3 className="text-info fw-normal mb-4">Full Stack Developer</h3> */}
              <TypedSkills />
              <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-outline-info  mx-3  ">
                  <a
                    href="/Resume.pdf"
                    className="  d-flex align-items-center text-decoration-none text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-download me-2 "></i> Download CV
                  </a>
                </button>
                <button className="btn btn-outline-warning  mx-3">
                  <Link to={"/about"}>
                    {" "}
                    <i className="fas fa-info me-2 "></i> Know More
                  </Link>
                </button>
              </div>
              <div className="mt-4 social-icons d-flex justify-content-around ">
                <a
                  href="https://x.com/Yatendra2832"
                  className="text-primary mx-2"
                  target="_blank"
                >
                  <i className="fa-brands fa-twitter fs-3"></i>
                </a>{" "}
                <a
                  href="mailto:yatendrayadav2832@gmail.com"
                  className="text-decoration-none"
                  target="_blank"
                >
                  <i className="fas fa-envelope me-2"></i>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/yatendra-singh-b83a4a227/"
                  className="text-primary mx-2"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin fs-3"></i>
                </a>
                <a
                  href="https://github.com/yatendra2832"
                  className="text-primary mx-2"
                  target="_blank"
                >
                  <i className="fa-brands fa-github fs-3"></i>
                </a>
                <a
                  href="https://www.instagram.com/yadavjiediting_youtube"
                  className="text-primary mx-2"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram fs-3"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 order-md-2 text-center">
              {" "}
              {/* Image section */}
              <div className="profile-img-wrapper">
                <img
                  src="./yatendraprofile.png"
                  alt="Yatendra Singh"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
