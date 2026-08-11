import React, { useState, useEffect } from "react";
import "./portfolio.css";
import TypedSkills from "./TypedSkills";
import { Link } from "react-scroll";
import {
  FaDownload,
  FaArrowRight,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaBars,
  FaTimes,
  FaArrowUp,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <section id="home" className="portfolio-container pt-5 pb-4 position-relative overflow-hidden">
      {/* Ambient Radial Background Orbs */}
      <div className="hero-glow-orb-left"></div>
      <div className="hero-glow-orb-right"></div>

      {/* Floating Back To Top Button */}
      {showScrollTop && (
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="floating-back-to-top"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </Link>
      )}

      {/* Floating Glass Navbar */}
      <nav className="floating-navbar d-flex align-items-center justify-content-between">
        <Link
          className="navbar-brand-logo text-decoration-none"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          {"<Yatendra />"}
        </Link>

        {/* Desktop Links */}
        <div className="d-none d-md-flex align-items-center gap-1">
          <Link
            className="nav-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            About
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Services
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Education
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Experience
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            FAQ
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="btn text-white fs-4 d-md-none border-0 p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <FaTimes className="text-info" /> : <FaBars />}
        </button>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer d-md-none">
            <Link
              className="nav-link"
              to="home"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              className="nav-link"
              to="services"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              className="nav-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
            <Link
              className="nav-link"
              to="education"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onClick={closeMobileMenu}
            >
              Education
            </Link>
            <Link
              className="nav-link"
              to="work"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              className="nav-link"
              to="experience"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onClick={closeMobileMenu}
            >
              Experience
            </Link>
            <Link
              className="nav-link"
              to="faq"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
            <Link
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Content Section */}
      <div className="container min-vh-100 d-flex align-items-center justify-content-center pt-5 mt-4 position-relative z-1">
        <div className="row align-items-center w-100 gy-5">
          {/* Text Content Left */}
          <div className="col-lg-7 text-center text-lg-start">
            <div className="status-badge mb-3">
              <span className="pulse-dot"></span>
              Available for Full-Stack & DevOps Roles
            </div>
            
            <div className="d-block mb-2">
              <span className="greeting-pill">
                Hi There <span className="wave-hand fs-4 ms-1">👋</span>
              </span>
            </div>

            <h1 className="display-3 fw-extrabold mb-2 text-white">
              I'm <span className="gradient-title">Yatendra Singh</span>
            </h1>
            
            <div className="fs-3 fw-medium mb-4 text-white">
              <TypedSkills />
            </div>

            <p className="lead text-muted-custom mb-4 max-w-xl mx-auto mx-lg-0 fs-6">
              Specializing in building robust full-stack web applications, scalable REST APIs, 
              microservices architecture, and modern DevOps cloud workflows.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 mb-4">
              <a
                href="/Resume.pdf"
                className="btn-gradient"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Download Resume
              </a>
              
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                className="btn-glass"
              >
                Explore Projects <FaArrowRight />
              </Link>
            </div>

            {/* Social Icons */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
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

          {/* Hero Avatar Right with Floating Tech Badges */}
          <div className="col-lg-5 text-center">
            <div className="hero-avatar-container">
              <div className="hero-avatar-glow"></div>
              
              <img
                src="./yatendraprofile.png"
                alt="Yatendra Singh"
                className="hero-avatar-img"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                width="280"
                height="280"
              />

              {/* Floating Badges */}
              <div className="floating-tech-badge badge-top-left">
                <FaReact className="text-info" /> React.js
              </div>
              
              <div className="floating-tech-badge badge-top-right">
                <FaNodeJs className="text-success" /> Node.js
              </div>
              
              <div className="floating-tech-badge badge-bottom-left">
                <SiMongodb className="text-success" /> MongoDB
              </div>
              
              <div className="floating-tech-badge badge-bottom-right">
                <FaDocker className="text-primary" /> Docker
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
