import React, { useState } from "react";
import "./ContactForm.css";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaCopy,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yatendrayadav2832@gmail.com");
    setCopiedEmail(true);
    toast.info("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        toast.success("Thank you! Your message has been sent successfully.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section-wrapper position-relative d-flex flex-column justify-content-center py-5"
      style={{ minHeight: "100vh", paddingTop: "90px", paddingBottom: "60px", scrollMarginTop: "80px" }}
    >
      {/* Background Ambient Glow Orbs */}
      <div className="contact-glow-orb contact-glow-orb-left"></div>
      <div className="contact-glow-orb contact-glow-orb-right"></div>

      <div className="container py-4 position-relative z-1">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">📩 Let's Connect</p>
          <h2 className="section-title text-white">
            Let's Build Something <span className="gradient-title">Extraordinary</span>
          </h2>
          <p className="text-muted-custom fs-6 max-w-xl mx-auto mt-2">
            Have a technical role, freelance inquiry, or project proposal? Send me a message below.
          </p>
        </div>

        {/* Contact Main Glass Container */}
        <div className="contact-glass-box p-4 p-md-5" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5 align-items-center">
            {/* Left Column: Direct Contact & Info Cards */}
            <div className="col-lg-5">
              {/* Status Banner */}
              <div className="p-3 rounded-4 mb-4 bg-success bg-opacity-10 border border-success border-opacity-25 d-flex align-items-center gap-3">
                <div className="pulse-dot bg-success" style={{ width: "10px", height: "10px" }}></div>
                <div className="fs-7 fw-semibold text-success">
                  Currently open for full-stack engineering & contract opportunities.
                </div>
              </div>

              <h3 className="fs-3 fw-bold text-white mb-3">
                Direct <span className="gradient-text">Contact Info</span>
              </h3>
              
              {/* Interactive Contact Cards */}
              <div className="d-flex flex-column gap-3 mb-4">
                {/* Email Card */}
                <div className="contact-info-card d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-box icon-cyan">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className="text-muted-custom fs-7">Email Me Directly</div>
                      <a href="mailto:yatendrayadav2832@gmail.com" className="text-white text-decoration-none fw-semibold fs-6">
                        yatendrayadav2832@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-sm btn-outline-info rounded-circle p-2"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <FaCheckCircle className="text-success" /> : <FaCopy />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="contact-info-card d-flex align-items-center gap-3">
                  <div className="contact-icon-box icon-purple">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="text-muted-custom fs-7">Location</div>
                    <div className="text-white fw-semibold fs-6">Ghaziabad, Uttar Pradesh, India</div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="contact-info-card d-flex align-items-center gap-3">
                  <div className="contact-icon-box icon-green">
                    <FaClock />
                  </div>
                  <div>
                    <div className="text-muted-custom fs-7">Guaranteed Response</div>
                    <div className="text-white fw-semibold fs-6">Within 24 Hours</div>
                  </div>
                </div>
              </div>

              {/* Quick Feature Badges */}
              <div className="d-flex flex-wrap gap-2">
                <span className="quick-feature-badge">
                  <FaBolt className="text-warning" /> Fast Turnaround
                </span>
                <span className="quick-feature-badge">
                  <FaShieldAlt className="text-info" /> 100% Confidential
                </span>
                <span className="quick-feature-badge">
                  <FaCheckCircle className="text-success" /> Quality Code
                </span>
              </div>
            </div>

            {/* Right Column: Sleek Form with Next-Gen Input Fields */}
            <div className="col-lg-7">
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                <div className="row g-3">
                  {/* Name Input */}
                  <div className="col-md-6">
                    <div className="field-group-container">
                      <div className="field-label-header">
                        <span>YOUR NAME</span>
                        <span className="field-required-pill">REQUIRED</span>
                      </div>
                      <div className="field-input-wrapper">
                        <FaUser className="field-icon" />
                        <input
                          type="text"
                          className="field-control"
                          placeholder="e.g. John Doe"
                          name="name"
                          onChange={handleChange}
                          value={formData.name}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="col-md-6">
                    <div className="field-group-container">
                      <div className="field-label-header">
                        <span>EMAIL ADDRESS</span>
                        <span className="field-required-pill">REQUIRED</span>
                      </div>
                      <div className="field-input-wrapper">
                        <FaEnvelope className="field-icon" />
                        <input
                          type="email"
                          className="field-control"
                          placeholder="e.g. john@example.com"
                          name="email"
                          onChange={handleChange}
                          value={formData.email}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <div className="field-group-container">
                    <div className="field-label-header">
                      <span>PHONE NUMBER</span>
                      <span className="text-muted-custom fs-7 fw-normal">OPTIONAL</span>
                    </div>
                    <div className="field-input-wrapper">
                      <FaPhone className="field-icon" />
                      <input
                        type="tel"
                        className="field-control"
                        placeholder="e.g. +91 98765 43210"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                      />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <div className="field-group-container">
                    <div className="field-label-header">
                      <span>YOUR MESSAGE</span>
                      <span className="field-required-pill">REQUIRED</span>
                    </div>
                    <div className="field-input-wrapper">
                      <FaCommentDots className="field-icon field-icon-textarea" />
                      <textarea
                        className="field-control"
                        placeholder="Tell me about your project overview, timeline, or open opportunity..."
                        rows="4"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Animated Submit Button */}
                <button
                  type="submit"
                  className="btn-submit-animated"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="paper-plane-icon" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
