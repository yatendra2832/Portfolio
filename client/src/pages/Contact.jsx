import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactForm.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  ("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://portfolio-backend-5ylf.onrender.com/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        toast.success('Thanks For Your Response !!')
      }
      // Reset form
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };
  return (
    <section id="contact" className="section p-2 ">
      <div
        className="container bg-tertiary p-5 rounded-4 contactcontainer"
        data-aos="fade-down"
      >
        <h2 className="contact-title text-center text-white text-shadow mb-5">
          <i className="fas fa-headset "></i> Get In{" "}
          <span className="text-primary">Touch</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 mb-4">
            <div className="contact-image text-center">
              <img
                src="/contact.png"
                alt="Contact Us"
                className="img-fluid  dropShadow"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 ">
            <form
              className="contact-form bg-white p-4 rounded box-shadow"
              onSubmit={handleSubmit}
            >
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="fas fa-phone"></i>
                </span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <i className="fas fa-comment-dots"></i>
                </span>
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="1"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>
              <div className="d-flex justify-content-center ">
                <button type="submit" className="btn btn-outline-primary  w-50">
                  Submit <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
