import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      school: "NIET Greater Noida",
      degree: "Bachelor of Technology in Information Technology",
      startDate: "August 2024",
      endDate: "June 2027",
      description: "Currently pursuing B.Tech graduation in IT. Focusing on advanced Software Engineering principles, Data Structures & Algorithms, Web Frameworks, and DevOps automation.",
      logo: "/nietlogo.png",
      badge: "Pursuing B.Tech",
      badgeColor: "bg-primary bg-opacity-20 text-info border-info",
      type: "ENGINEERING INSTITUTE",
      coursework: ["Software Engineering", "Data Structures & Algorithms", "MERN Stack", "DevOps & Cloud"],
    },
    {
      school: "Government Polytechnic Ghaziabad",
      degree: "Diploma in Information Technology",
      startDate: "October 2021",
      endDate: "June 2024",
      description: "Completed 3-Year Diploma in Information Technology with Honours distinction. Built strong foundations in Computer Science, Database Management, and Object-Oriented Programming.",
      logo: "/gpglogo.png",
      badge: "Honours Distinction",
      badgeColor: "bg-purple bg-opacity-20 text-purple border-purple",
      styleColor: { color: "#a855f7", borderColor: "rgba(168, 85, 247, 0.4)" },
      type: "STATE POLYTECHNIC",
      coursework: ["Computer Science", "Database Systems (DBMS)", "OOP & C++", "Web Development"],
    },
    {
      school: "Kendriya Vidyalaya Sangathan",
      degree: "Class 12 Higher Secondary Education",
      startDate: "2020",
      endDate: "2021",
      description: "Passed Senior Secondary Education (Class XII) in Science stream with an aggregate of 89%.",
      logo: "/kvslogo.png",
      badge: "89% Aggregate",
      badgeColor: "bg-warning bg-opacity-20 text-warning border-warning",
      type: "CENTRAL SCHOOL (CBSE)",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
    {
      school: "Kendriya Vidyalaya Sangathan",
      degree: "Class 10 Secondary Education",
      startDate: "2018",
      endDate: "2019",
      description: "Passed Secondary Education (Class X) with an aggregate of 87%.",
      logo: "/kvslogo.png",
      badge: "87% Aggregate",
      badgeColor: "bg-success bg-opacity-20 text-success border-success",
      type: "CENTRAL SCHOOL (CBSE)",
      coursework: ["Mathematics", "Science", "Social Science", "Information Technology"],
    },
  ];

  return (
    <section id="education" className="py-4">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">Academic Journey</p>
          <h2 className="section-title text-white">
            Education <span className="gradient-title">& Qualifications</span>
          </h2>
          <p className="text-muted-custom fs-6 max-w-xl mx-auto mt-2">
            My formal engineering degree, technical diploma honours, and secondary academic achievements.
          </p>
        </div>

        {/* Education Cards Stack */}
        <div className="row g-4">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="col-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="education-card">
                <div className="row align-items-center gy-4">
                  {/* Logo Container Left */}
                  <div className="col-md-3 col-lg-2 text-center text-md-start">
                    <div className="d-flex flex-column align-items-center align-items-md-start">
                      <div className="education-logo-box">
                        <img
                          src={item.logo}
                          className="img-fluid"
                          alt={`${item.school} logo`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="institution-type-tag mt-2">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Details Right */}
                  <div className="col-md-9 col-lg-10">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <h3 className="fs-4 fw-bold text-white mb-0 font-display">
                        {item.degree}
                      </h3>
                      <span
                        className={`badge border px-3 py-2 rounded-pill fs-7 fw-bold ${item.badgeColor}`}
                        style={item.styleColor || {}}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="fs-5 text-info font-display fw-semibold mb-2 d-flex align-items-center gap-2">
                      <FaGraduationCap /> {item.school}
                    </h4>

                    <div className="d-flex align-items-center gap-2 text-muted-custom fs-6 mb-3">
                      <FaCalendarAlt className="text-warning" />
                      <span>{item.startDate} — {item.endDate}</span>
                    </div>

                    <p className="text-muted-custom mb-3 fs-6">
                      {item.description}
                    </p>

                    {/* Coursework Tags */}
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="fs-7 fw-semibold text-white me-1 d-flex align-items-center gap-1">
                        <FaBookOpen className="text-info" /> Key Focus:
                      </span>
                      {item.coursework.map((tag, tIdx) => (
                        <span key={tIdx} className="coursework-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
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

export default Education;
