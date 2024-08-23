import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  const educationData = [
    {
      school: "NIET Greater Noida",
      degree: "Bachelor of Technology in Information Technology",
      startDate: "August 2024",
      endDate: "June 2027",
      description: "Currently pursuing graduation in Information Technology.",
      logo: "/nietlogo.png",
    },
    {
      school: "Government Polytechnic Ghaziabad",
      degree: "Diploma in Information Technology",
      startDate: "October 2021",
      endDate: "June 2024",
      description: "Completed with Honours.",
      logo: "/gpglogo.png",
    },
    {
      school: "Kendriya Vidyalaya Sangathan",
      degree: "Class 12 Higher Secondary Education",
      startDate: "2020",
      endDate: "2021",
      description: "Passed with an aggregate of 89%.",
      logo: "/kvslogo.png",
    },
    {
      school: "Kendriya Vidyalaya Sangathan",
      degree: "Class 10 Secondary Education",
      startDate: "2018",
      endDate: "2019",
      description: "Passed with an aggregate of 87%.",
      logo: "/kvslogo.png",
    },
  ];

  return (
    <section id="education" className="container mt-3 p-5">
      <h2 className="text-white mb-5 text-center fs-1">
        {" "}
        <span className="border-bottom  rounded-4 p-2 border-2">Education</span>
      </h2>
      {educationData.map((item, index) => (
        <div
          key={index}
          className="card my-3  text-white border-0 "
          data-aos="fade-down"
        >
          <div className="row no-gutters align-items-center">
            <div className="col-md-3 text-center ">
              <img
                src={item.logo}
                className="img-fluid "
                alt={`${item.school} logo`}
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title text-warning text-shadow fs-2">
                  {item.degree}
                </h5>
                <h6 className="card-subtitle mb-2 text-info fs-3">
                  {item.school}
                </h6>
                <p className="card-text">
                  <strong>Duration:</strong> {item.startDate} - {item.endDate}
                </p>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
