import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaDocker,
  FaPaintBrush,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      icon: <FaLaptopCode className="text-info fs-2" />,
      tag: "MERN STACK",
      description:
        "Building scalable, high-performance web applications from concept to deployment using React, Node.js, Express, and MongoDB.",
      features: [
        "Single Page Applications (SPAs)",
        "E-Commerce & Healthcare Platforms",
        "Role-Based User Dashboards",
        "State Management & Performance Tuning",
      ],
      color: "skill-card-frontend",
    },
    {
      id: 2,
      title: "Backend & REST API Architecture",
      icon: <FaServer className="text-purple fs-2" style={{ color: "#a855f7" }} />,
      tag: "NODE.JS & EXPRESS",
      description:
        "Designing production-grade server architectures, secure RESTful APIs, database schemas, and microservice workflows.",
      features: [
        "RESTful API Endpoint Design",
        "MongoDB Mongoose Data Modeling",
        "JWT / Session Authentication & Security",
        "Payment Gateway & Video Call API Integrations",
      ],
      color: "skill-card-backend",
    },
    {
      id: 3,
      title: "DevOps & Cloud Automation",
      icon: <FaDocker className="text-success fs-2" />,
      tag: "DOCKER & KUBERNETES",
      description:
        "Containerizing software applications, setting up CI/CD pipelines, and deploying robust backend services to AWS Cloud.",
      features: [
        "Docker Containerization & Multi-stage Builds",
        "Kubernetes Cluster Configuration",
        "AWS Cloud Infrastructure Setup",
        "Automated Deployment Workflows",
      ],
      color: "skill-card-devops",
    },
    {
      id: 4,
      title: "Responsive UI/UX Engineering",
      icon: <FaPaintBrush className="text-warning fs-2" />,
      tag: "REACT & GLASSMORPHISM",
      description:
        "Crafting intuitive, accessible, and visually stunning user interfaces with modern CSS, glassmorphism, and dynamic micro-animations.",
      features: [
        "Mobile-First Responsive Layouts",
        "Modern Dark Mode & Glassmorphism Aesthetics",
        "Cross-Browser Compatibility",
        "Fast First Contentful Paint (FCP) Optimization",
      ],
      color: "skill-card-tools",
    },
  ];

  return (
    <section id="services" className="py-4">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">What I Offer</p>
          <h2 className="section-title text-white">
            Services & <span className="gradient-title">Specializations</span>
          </h2>
          <p className="text-muted-custom fs-6 max-w-xl mx-auto mt-2">
            Delivering end-to-end software engineering solutions tailored for modern business and technical requirements.
          </p>
        </div>

        {/* 4-Grid Service Cards */}
        <div className="row g-4 mb-4">
          {serviceList.map((service, index) => (
            <div
              key={service.id}
              className="col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`skill-domain-card ${service.color} p-4 p-md-5 d-flex flex-column justify-content-between h-100`}>
                <div>
                  {/* Top Icon & Tag */}
                  <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                    <div className="p-3 rounded-4 bg-dark bg-opacity-60 border border-white border-opacity-10 d-inline-block">
                      {service.icon}
                    </div>
                    <span className="badge bg-dark border border-secondary text-info px-3 py-2 rounded-pill fs-7">
                      {service.tag}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="fs-4 fw-bold text-white mb-2 font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-custom fs-6 mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="list-unstyled mb-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="d-flex align-items-center gap-2 text-muted-custom fs-6 mb-2">
                        <FaCheck className="text-success fs-7 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-65}
                    duration={500}
                    className="btn btn-sm btn-outline-info rounded-pill d-inline-flex align-items-center gap-2 px-3 py-2"
                  >
                    Inquire About This Service <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
