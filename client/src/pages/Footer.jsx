import React from "react";
import { Link } from "react-scroll";
import {
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="mt-5 pt-5 pb-4 position-relative z-1"
      style={{
        background: "rgba(11, 15, 25, 0.95)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Top Gradient Border Accent Line */}
      <div
        className="position-absolute top-0 start-0 end-0"
        style={{
          height: "2px",
          background: "linear-gradient(90deg, #38bdf8 0%, #6366f1 50%, #a855f7 100%)",
        }}
      ></div>

      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">
          {/* Brand Left Column */}
          <div className="col-lg-4 text-center text-lg-start">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-brand-logo text-decoration-none fs-2 d-inline-block mb-2 cursor-pointer"
            >
              {"<Yatendra />"}
            </Link>
            <p className="text-muted-custom fs-6 mb-3">
              Full Stack Engineer specializing in scalable MERN stack web applications and DevOps workflows.
            </p>
          </div>

          {/* Quick Nav Links Middle Column */}
          <div className="col-lg-4 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-3 fs-6">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="text-muted-custom text-decoration-none nav-link-footer"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="text-muted-custom text-decoration-none nav-link-footer"
              >
                About
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="text-muted-custom text-decoration-none nav-link-footer"
              >
                Services
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="text-muted-custom text-decoration-none nav-link-footer"
              >
                Skills
              </Link>
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="text-muted-custom text-decoration-none nav-link-footer"
              >
                Education
              </Link>
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="text-muted-custom text-decoration-none nav-link-footer"
              >
                Projects
              </Link>
              <Link
                to="faq"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="text-muted-custom text-decoration-none nav-link-footer"
              >
                FAQ
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-muted-custom text-decoration-none nav-link-footer"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Icons Right Column */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-3">
              <a
                href="https://github.com/yatendra2832"
                className="social-pill"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yatendra-singh-b83a4a227/"
                className="social-pill"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/Yatendra2832"
                className="social-pill"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:yatendrayadav2832@gmail.com"
                className="social-pill"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/yadavjiediting_youtube"
                className="social-pill"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-white border-opacity-10" />

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 text-muted-custom fs-7">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-white fw-semibold">Yatendra Singh</span>. All Rights Reserved.
          </div>

          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="btn btn-sm btn-outline-info rounded-pill d-inline-flex align-items-center gap-2 px-3 py-1 text-decoration-none"
            style={{ fontSize: "0.8rem" }}
          >
            Back to Top <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
