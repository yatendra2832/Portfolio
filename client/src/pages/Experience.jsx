import React from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaCode,
  FaServer,
} from "react-icons/fa";

const Experience = () => {
  const internships = [
    {
      id: 1,
      title: "Node.js Backend Engineering Specialization",
      company: "Internshala Training",
      duration: "August 2023 - September 2023",
      icon: <FaServer />,
      description:
        "Specialized industry training focused on building production-grade server architectures, RESTful API design, database schemas, and asynchronous workflows.",
      achievements: [
        "Architected scalable RESTful endpoints using Node.js & Express framework",
        "Designed MongoDB database schemas with Mongoose ORM data modeling",
        "Implemented user authentication, session security & error handling",
        "Integrated dynamic frontend clients with asynchronous AJAX communication",
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "Async JS", "REST APIs", "AJAX"],
    },
    {
      id: 2,
      title: "Web Development & Frontend Specialization",
      company: "Internshala Training",
      duration: "January 2023 - February 2023",
      icon: <FaCode />,
      description:
        "Comprehensive web development specialization covering modern frontend standards, responsive design systems, and client-side JavaScript workflows.",
      achievements: [
        "Mastered semantic HTML5, CSS3 styling & responsive Bootstrap grid layouts",
        "Developed interactive DOM manipulation routines with modern JavaScript (ES6+)",
        "Created mobile-first responsive web layouts optimized for cross-device compatibility",
      ],
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "Responsive UX"],
    },
  ];

  return (
    <section id="experience" className="py-4">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">Work & Industry Exposure</p>
          <h2 className="section-title text-white">
            Experience <span className="gradient-title">& Training</span>
          </h2>
          <p className="text-muted-custom fs-6 max-w-xl mx-auto mt-2">
            Formal technical specialization training and practical software development exposure.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="row g-4">
          {internships.map((internship, index) => (
            <div
              key={internship.id}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="experience-glass-card">
                <div>
                  {/* Top Badge Row */}
                  <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="company-logo-badge">
                        {internship.icon}
                      </div>
                      <div>
                        <h3 className="fs-5 fw-bold text-white mb-0 font-display">
                          {internship.company}
                        </h3>
                        <span className="text-muted-custom fs-7">Certified Specialization</span>
                      </div>
                    </div>

                    <span className="badge bg-dark border border-secondary text-warning px-3 py-2 rounded-pill fs-7 d-flex align-items-center gap-1">
                      <FaCalendarAlt /> {internship.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="fs-4 fw-bold text-info mb-3">
                    {internship.title}
                  </h4>

                  {/* Description */}
                  <p className="text-muted-custom mb-3 fs-6">
                    {internship.description}
                  </p>

                  {/* Achievements List */}
                  <div className="mb-4">
                    <div className="fs-7 fw-bold text-white mb-2 text-uppercase letter-spacing-1">
                      Key Competencies Mastered:
                    </div>
                    <ul className="list-unstyled mb-0">
                      {internship.achievements.map((item, aIdx) => (
                        <li key={aIdx} className="d-flex align-items-start gap-2 text-muted-custom fs-6 mb-2">
                          <FaCheckCircle className="text-success mt-1 flex-shrink-0 fs-7" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Skills Chips */}
                <div>
                  <div className="d-flex flex-wrap gap-2">
                    {internship.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="badge bg-dark border border-info border-opacity-30 text-info px-3 py-2 rounded-pill fs-7"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
