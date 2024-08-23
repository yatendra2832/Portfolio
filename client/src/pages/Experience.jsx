import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const internships = [
    {
      id: 1,
      title: "Node.js Training",
      company: "Internshala",
      duration: "August 2023 - September 2023",
      description:
        "Proficient in Node.js, JavaScript, asynchronous programming, MongoDB, AJAX, and backend development.",
    },
    {
      id: 2,
      title: "Web Development Training",
      company: "Internshala",
      duration: "January 2023 - February 2023",
      description:
        "Acquired proficiency in HTML, CSS, JavaScript, Bootstrap, and web development.",
    },
  ];

  return (
    <section id="experience" className="section text-light py-5">
      <div className="container mt-2">
        <h2 className="text-white mb-5 text-center fs-1">
          <span className="border-bottom border-primary rounded-4 p-2 border-2 text-shadow">
            Experience
          </span>
        </h2>
        <div className="row">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="col-md-6 mb-4 "
              data-aos="zoom-in"
            >
              <div className="card h-100 border-0 bg-dark shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">{internship.title}</h5>
                  <h6 className="card-subtitle mb-2 text-white">
                    {internship.company}
                  </h6>
                  <p className="card-text">
                    <small className="text-white">{internship.duration}</small>
                  </p>
                  <p className="card-text text-white">
                    {internship.description}
                  </p>
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
