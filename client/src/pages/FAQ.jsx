import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      question: "What is your primary software development tech stack?",
      answer:
        "My core specialization is the MERN Stack (MongoDB, Express.js, React.js, Node.js), coupled with modern DevOps automation tools including Docker containers, Kubernetes, AWS Cloud, RESTful API design, and Git version control.",
    },
    {
      question: "What national level qualifications do you hold?",
      answer:
        "I am qualified in GATE CSE 2026 (Graduate Aptitude Test in Engineering — Computer Science & IT) and DRDO CEPTAM 11 (Defence Research and Development Organisation). I am currently pursuing B.Tech in IT at NIET Greater Noida and completed my IT Diploma with Honours distinction.",
    },
    {
      question: "Are you available for full-time software engineering roles?",
      answer:
        "Yes! I am actively available for full-time Full-Stack Engineering, Backend Engineering, and DevOps roles, as well as freelance web development and contract projects.",
    },
    {
      question: "What third-party API integrations have you implemented?",
      answer:
        "I have hands-on experience integrating RazorPay payment processing, ZegoCloud real-time 1-on-1 video calling APIs, Twilio SMS & Email alerts, JWT authentication, and MongoDB Mongoose ORM data models.",
    },
    {
      question: "How can I contact you or request a project quote?",
      answer:
        "You can reach out directly via the Contact form below, email me at yatendrayadav2832@gmail.com, or connect on LinkedIn. I guarantee a response within 24 hours.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-4">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">Got Questions?</p>
          <h2 className="section-title text-white">
            Frequently Asked <span className="gradient-title">Questions</span>
          </h2>
          <p className="text-muted-custom fs-6 max-w-xl mx-auto mt-2">
            Quick answers to common inquiries regarding my tech stack, qualifications, and availability.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: "850px" }}>
          <div className="d-flex flex-column gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIdx === index;
              return (
                <div
                  key={index}
                  className="glass-card p-4 transition-all"
                  style={{
                    borderColor: isOpen ? "rgba(56, 189, 248, 0.45)" : "rgba(255, 255, 255, 0.1)",
                    background: isOpen ? "rgba(30, 41, 59, 0.85)" : "rgba(15, 23, 42, 0.7)",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <FaQuestionCircle className={isOpen ? "text-info fs-5" : "text-muted-custom fs-5"} />
                      <h3 className="fs-5 fw-bold text-white mb-0 font-display">
                        {faq.question}
                      </h3>
                    </div>
                    <FaChevronDown
                      className={`text-info transition-transform ${isOpen ? "rotate-180" : ""}`}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-top border-white border-opacity-10">
                      <p className="text-muted-custom fs-6 mb-0 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
