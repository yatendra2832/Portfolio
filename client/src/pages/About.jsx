import React from "react";
import { Link } from "react-scroll";
import {
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaServer,
  FaRocket,
  FaArrowRight,
  FaLaptopCode,
  FaTrophy,
  FaCheckCircle,
  FaMedal,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-4">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">Get to Know Me</p>
          <h2 className="section-title text-white">
            About <span className="gradient-title">Me</span>
          </h2>
        </div>

        {/* 4 Stat Metric Cards Banner */}
        <div className="row g-3 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="col-6 col-md-3">
            <div className="about-stat-card border-info border-opacity-30">
              <div className="about-stat-number text-info">GATE 2026</div>
              <div className="about-stat-label">CSE Qualified</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="about-stat-card border-warning border-opacity-30">
              <div className="about-stat-number text-warning">DRDO</div>
              <div className="about-stat-label">CEPTAM 11 Qualified</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="about-stat-card">
              <div className="about-stat-number">B.Tech IT</div>
              <div className="about-stat-label">NIET Greater Noida</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="about-stat-card">
              <div className="about-stat-number">Honours</div>
              <div className="about-stat-label">IT Diploma Distinction</div>
            </div>
          </div>
        </div>

        {/* Highlight Banner for National Exam Qualifications */}
        <div className="glass-card p-4 mb-4" data-aos="fade-up" data-aos-delay="150">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="p-2 rounded-circle bg-warning bg-opacity-20 text-warning fs-5">
              <FaTrophy />
            </div>
            <h3 className="fs-4 fw-bold text-white mb-0 font-display">
              National Level <span className="gradient-title">Qualifications & Achievements</span>
            </h3>
          </div>

          <div className="row g-3">
            {/* GATE CSE Card */}
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-dark bg-opacity-70 border border-info border-opacity-40 h-100 position-relative overflow-hidden shadow-sm">
                <div className="p-2 rounded-4 bg-white bg-opacity-90 border border-white border-opacity-30 flex-shrink-0 shadow d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                  <img
                    src="/logogate.jfif"
                    alt="GATE CSE Logo"
                    className="img-fluid rounded-3"
                    loading="lazy"
                    decoding="async"
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <h4 className="fs-5 fw-bold text-white mb-0 font-display">GATE CSE 2026</h4>
                    <span className="badge bg-success bg-opacity-20 text-success border border-success border-opacity-30 px-2 py-1 rounded-pill fs-7 d-flex align-items-center gap-1">
                      <FaCheckCircle /> Qualified
                    </span>
                  </div>
                  <p className="text-muted-custom fs-7 mb-0 mt-1">
                    Graduate Aptitude Test in Engineering — Computer Science & Information Technology.
                  </p>
                </div>
              </div>
            </div>

            {/* DRDO CEPTAM 11 Card */}
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-dark bg-opacity-70 border border-warning border-opacity-40 h-100 position-relative overflow-hidden shadow-sm">
                <div className="p-2 rounded-4 bg-white bg-opacity-90 border border-white border-opacity-30 flex-shrink-0 shadow d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                  <img
                    src="/drdologo.jfif"
                    alt="DRDO CEPTAM 11 Logo"
                    className="img-fluid rounded-3"
                    loading="lazy"
                    decoding="async"
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <h4 className="fs-5 fw-bold text-white mb-0 font-display">DRDO CEPTAM 11</h4>
                    <span className="badge bg-warning bg-opacity-20 text-warning border border-warning border-opacity-30 px-2 py-1 rounded-pill fs-7 d-flex align-items-center gap-1">
                      <FaMedal /> Qualified
                    </span>
                  </div>
                  <p className="text-muted-custom fs-7 mb-0 mt-1">
                    Defence Research and Development Organisation — Technical Qualification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Glass Card Container */}
        <div className="glass-card p-4 p-lg-5" data-aos="fade-up" data-aos-delay="200">
          <div className="row align-items-center gy-4">
            {/* Left Column: Graphic & Badges */}
            <div className="col-lg-4 text-center">
              <div className="position-relative d-inline-block">
                {/* Glowing Aura Ring */}
                <div
                  className="position-absolute inset-0 rounded-circle"
                  style={{
                    width: "240px",
                    height: "240px",
                    background: "var(--gradient-primary)",
                    filter: "blur(35px)",
                    opacity: 0.35,
                    top: "-10px",
                    left: "-10px",
                  }}
                ></div>

                {/* Logo Image */}
                <img
                  src="/logo2.png"
                  alt="Yatendra Logo"
                  className="img-fluid rounded-4 position-relative z-1 border border-white border-opacity-10 shadow-lg"
                  loading="lazy"
                  decoding="async"
                  style={{ maxWidth: "230px" }}
                />

                {/* Floating Specialization Badges */}
                <div className="d-flex justify-content-center flex-wrap gap-2 mt-3 position-relative z-2">
                  <span className="badge bg-primary bg-opacity-20 text-info border border-info border-opacity-30 px-3 py-2 rounded-pill fs-7">
                    ⚡ Full-Stack Engineer
                  </span>
                  <span className="badge bg-purple bg-opacity-20 text-purple border border-purple border-opacity-30 px-3 py-2 rounded-pill fs-7" style={{ color: "#a855f7", borderColor: "rgba(168,85,247,0.3)" }}>
                    🐳 DevOps Enthusiast
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Core Pillars */}
            <div className="col-lg-8">
              <h3 className="fs-2 fw-bold text-white mb-2">
                I'm <span className="gradient-text">Yatendra Singh</span>
              </h3>
              <h4 className="fs-5 text-info mb-3 font-display">
                Full Stack Web Developer & DevOps Engineer
              </h4>

              <p className="text-muted-custom lead mb-4 fs-6">
                I specialize in crafting high-performance, scalable full-stack web applications, robust RESTful APIs, and cloud microservices. With deep expertise in the MERN stack (MongoDB, Express, React, Node.js) and modern DevOps automation, I turn complex technical challenges into efficient, intuitive digital products.
              </p>

              {/* 3 Core Technical Pillars */}
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="about-feature-box">
                    <div className="fs-4 text-info mb-2">
                      <FaLaptopCode />
                    </div>
                    <div className="fw-bold text-white fs-6 mb-1">Frontend UI/UX</div>
                    <div className="text-muted-custom fs-7">React.js, Modern CSS, Responsive Design</div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="about-feature-box">
                    <div className="fs-4 text-purple mb-2" style={{ color: "#a855f7" }}>
                      <FaServer />
                    </div>
                    <div className="fw-bold text-white fs-6 mb-1">Backend Architecture</div>
                    <div className="text-muted-custom fs-7">Node.js, Express, REST APIs, Databases</div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="about-feature-box">
                    <div className="fs-4 text-success mb-2">
                      <FaRocket />
                    </div>
                    <div className="fw-bold text-white fs-6 mb-1">DevOps & Cloud</div>
                    <div className="text-muted-custom fs-7">Docker, Kubernetes, AWS Deployment</div>
                  </div>
                </div>
              </div>

              {/* Contact Info Pills */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-dark bg-opacity-50 border border-white border-opacity-10">
                    <div className="fs-4 text-info">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className="text-muted-custom fs-7">Email</div>
                      <a href="mailto:yatendrayadav2832@gmail.com" className="text-white text-decoration-none fw-medium fs-6">
                        yatendrayadav2832@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-dark bg-opacity-50 border border-white border-opacity-10">
                    <div className="fs-4 text-warning">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <div className="text-muted-custom fs-7">Location</div>
                      <div className="text-white fw-medium fs-6">Ghaziabad, Uttar Pradesh, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3">
                <a
                  href="/Resume.pdf"
                  className="btn-gradient"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload /> Download Resume
                </a>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={500}
                  className="btn-glass"
                >
                  Let's Connect <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
