import React from "react";
import "./styles.css";

const projects = [
  {
    id: 1,
    title: "Project 1",
    images: [
      "Project1/HomePage.png",
      "Project1/BloodTestPage.png",
      "Project1/CartPage.png",
      "Project1/SupplementsPage.png",
      "Project1/DoctorsPage.png",
      "Project1/DoctorsconsultationPage.png",
    ],
    description:
      " A full-stack MERN-based healthcare application offering appointment scheduling, home sample collection for lab tests and scan booking, supplement purchasing with home deliveryservices, and robust authentication functionalities.",
    technologies: "Node.js, Express.js, React, MongoDB, RESTful API,Git  ",

    // Learning: Payment Gateway integration - RazorPay,Messaging
    //  Services -Twilio, One-to-One Video calling using zegoCloud
    // Achievement: Admin Panel for managing bookings,Handling
    //  RESTful API, User Dashboard with personalized records, developed
    //  Secure full stack Web Application ",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <h1 className=" text-center text-shadow mb-4 ">Projects</h1>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-12 mb-4" key={project.id}>
              <div className="card project-card">
                <div
                  id={`carousel-${project.id}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        } p-5`}
                      >
                        <img
                          src={image}
                          className="d-block w-100 rounded-3 box-shadow"
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel-${project.id}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel-${project.id}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-shadow">{project.title}</h5>
                  <p className="card-text fs-5 fst-italic">{project.description}</p>
                  <p className="card-text fst-italic fs-5 "><span className=" fw-bold">Tools and Technologies Used :</span> {project.technologies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
