// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-4  border-top  rounded-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-uppercase">Yatendra Singh</h5>
            <p>Full Stack Developer | MERN Stack Specialist</p>
          </div>
          {/* <div className="col-md-6 text-md-right">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className="text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a
              href="https://github.com/yourprofile"
              className="text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-white mx-2"
            >
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div> */}
          <div className="col-md-6  social-icons d-flex justify-content-around ">
            <a
              href="https://x.com/Yatendra2832"
              className="text-primary mx-2"
              target="_blank"
            >
              <i className="fa-brands fa-twitter fs-3"></i>
            </a>{" "}
            <a
              href="mailto:yatendrayadav2832@gmail.com"
              className="text-decoration-none"
              target="_blank"
            >
              <i className="fas fa-envelope me-2"></i>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/yatendra-singh-b83a4a227/"
              className="text-primary mx-2"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin fs-3"></i>
            </a>
            <a
              href="https://github.com/yatendra2832"
              className="text-primary mx-2"
              target="_blank"
            >
              <i className="fa-brands fa-github fs-3"></i>
            </a>
            <a
              href="https://www.instagram.com/yadavjiediting_youtube"
              className="text-primary mx-2"
              target="_blank"
            >
              <i className="fa-brands fa-instagram fs-3"></i>
            </a>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>
            &copy; {new Date().getFullYear()} Yatendra Singh. All Rights
            Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
