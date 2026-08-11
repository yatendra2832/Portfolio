import React, { useState } from "react";
import "./styles.css";
import {
  FaLaptopCode,
  FaTools,
  FaExpand,
  FaTimes,
  FaLayerGroup,
  FaCreditCard,
  FaVideo,
  FaCommentAlt,
  FaUserShield,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Healthcare Digital Ecosystem (MERN Stack)",
    category: "Full Stack Web Application",
    screenshots: [
      { label: "Home Dashboard", src: "Project1/HomePage.png", icon: "🏠" },
      { label: "Lab Sample Collection", src: "Project1/BloodTestPage.png", icon: "🩸" },
      { label: "Cart & Checkout", src: "Project1/CartPage.png", icon: "🛒" },
      { label: "Supplement Store", src: "Project1/SupplementsPage.png", icon: "💊" },
      { label: "Doctor Directory", src: "Project1/DoctorsPage.png", icon: "👨‍⚕️" },
      { label: "Video Consultation", src: "Project1/DoctorsconsultationPage.png", icon: "📹" },
    ],
    description:
      "A feature-rich full-stack healthcare web application delivering online doctor appointments, home lab test sample collections, scan bookings, E-commerce supplement purchasing with payment processing, and real-time video consultations.",
    architectureCards: [
      {
        title: "RazorPay Integration",
        desc: "Secure payment gateway for transactions & orders.",
        icon: <FaCreditCard className="text-info" />,
      },
      {
        title: "ZegoCloud Video Calls",
        desc: "Real-time 1-on-1 Doctor Video Consultations.",
        icon: <FaVideo className="text-purple" style={{ color: "#a855f7" }} />,
      },
      {
        title: "Twilio Notifications",
        desc: "Automated SMS & Email booking alerts.",
        icon: <FaCommentAlt className="text-warning" />,
      },
      {
        title: "Admin Panel Dashboard",
        desc: "Centralized management of bookings & records.",
        icon: <FaUserShield className="text-success" />,
      },
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "RazorPay",
      "ZegoCloud",
      "REST API",
      "Git",
    ],
  },
];

const Work = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentProject = projects[0];
  const currentScreenshot = currentProject.screenshots[activeImageIndex];

  const nextScreenshot = () => {
    setActiveImageIndex((prev) => (prev + 1) % currentProject.screenshots.length);
  };

  const prevScreenshot = () => {
    setActiveImageIndex(
      (prev) => (prev - 1 + currentProject.screenshots.length) % currentProject.screenshots.length
    );
  };

  return (
    <section id="work" className="py-4">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">Portfolio Showcase</p>
          <h2 className="section-title text-white">
            Featured <span className="gradient-title">Projects</span>
          </h2>
          <p className="text-muted-custom fs-6 max-w-xl mx-auto mt-2">
            An in-depth look at my full-stack web applications and software engineering architecture.
          </p>
        </div>

        {/* Project Card */}
        <div className="project-glass-card" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4 align-items-center mb-4">
            <div className="col-lg-8">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary bg-opacity-15 text-info fs-7 fw-semibold mb-2">
                <FaLayerGroup /> {currentProject.category}
              </div>
              <h3 className="fs-2 fw-bold text-white mb-2 font-display">
                {currentProject.title}
              </h3>
              <p className="text-muted-custom lead fs-6 mb-0">
                {currentProject.description}
              </p>
            </div>
          </div>

          <div className="row gy-4 align-items-center">
            {/* Left Column: Interactive Screenshot Showcase Frame */}
            <div className="col-lg-7">
              <div className="project-preview-frame">
                <img
                  src={currentScreenshot.src}
                  alt={currentScreenshot.label}
                  className="project-preview-img"
                  loading="lazy"
                  decoding="async"
                />

                {/* Overlay Zoom Action */}
                <div
                  className="project-preview-overlay"
                  onClick={() => setLightboxOpen(true)}
                  title="Click to Expand Fullscreen"
                >
                  <div className="btn-gradient px-4 py-2 rounded-pill fs-6">
                    <FaExpand className="me-2" /> Expand Screenshot
                  </div>
                </div>

                {/* Left/Right Slider Buttons */}
                <button
                  onClick={prevScreenshot}
                  className="position-absolute top-50 start-0 translate-middle-y btn btn-dark bg-opacity-75 text-white rounded-circle p-2 ms-2 border-0"
                  aria-label="Previous screenshot"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={nextScreenshot}
                  className="position-absolute top-50 end-0 translate-middle-y btn btn-dark bg-opacity-75 text-white rounded-circle p-2 me-2 border-0"
                  aria-label="Next screenshot"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Interactive Thumbnail Selector Tabs */}
              <div className="d-flex flex-wrap gap-2 mt-3 justify-content-center justify-content-lg-start">
                {currentProject.screenshots.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`project-thumb-btn ${idx === activeImageIndex ? "active" : ""}`}
                  >
                    <span>{item.icon}</span> {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Architecture Feature Cards */}
            <div className="col-lg-5">
              <div className="fs-6 fw-bold text-white mb-3 d-flex align-items-center gap-2">
                <FaLaptopCode className="text-info" /> Core Architecture & Highlights:
              </div>

              <div className="row g-2 mb-4">
                {currentProject.architectureCards.map((card, cIdx) => (
                  <div key={cIdx} className="col-6">
                    <div className="project-feature-card h-100">
                      <div className="fs-4 mb-1">{card.icon}</div>
                      <div className="fw-bold text-white fs-7 mb-1">{card.title}</div>
                      <div className="text-muted-custom fs-8">{card.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-4">
                <div className="fs-6 fw-bold text-white mb-2 d-flex align-items-center gap-2">
                  <FaTools className="text-warning" /> Technologies Used:
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="badge bg-dark border border-info border-opacity-30 text-info px-3 py-2 rounded-pill fs-7"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {lightboxOpen && (
        <div className="lightbox-modal-backdrop" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="text-center mb-3">
              <span className="badge bg-info bg-opacity-20 text-info border border-info px-3 py-1 rounded-pill fs-7 mb-2">
                {currentScreenshot.icon} {currentScreenshot.label}
              </span>
              <h4 className="fs-4 fw-bold text-white mb-0">{currentProject.title}</h4>
            </div>

            <div className="text-center">
              <img
                src={currentScreenshot.src}
                alt={currentScreenshot.label}
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "75vh", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
