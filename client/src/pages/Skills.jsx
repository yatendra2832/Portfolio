import React from "react";
import ProgressBar from "./ProgressBar";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiKubernetes,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-4">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">Technical Proficiency</p>
          <h2 className="section-title text-white">
            Skills & <span className="gradient-title">Technologies</span>
          </h2>
          <p className="text-muted-custom fs-6 max-w-xl mx-auto mt-2">
            A comprehensive breakdown of my core software development, database, and DevOps competencies.
          </p>
        </div>

        {/* 3 Domain Cards Grid */}
        <div className="row g-4 mb-4">
          {/* Frontend Card */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="skill-domain-card skill-card-frontend">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-3 rounded-4 bg-info bg-opacity-15 border border-info border-opacity-30 text-info">
                    <FaCode className="fs-3" />
                  </div>
                  <div>
                    <h3 className="fs-4 fw-bold text-white mb-0">Frontend</h3>
                    <div className="text-muted-custom fs-7">UI & Web Development</div>
                  </div>
                </div>
                <span className="skill-level-badge badge-expert">Expert</span>
              </div>

              <ProgressBar label="React.js" value={85} />
              <ProgressBar label="JavaScript (ES6+)" value={85} />
              <ProgressBar label="HTML5 & CSS3" value={90} />
              <ProgressBar label="Bootstrap & Responsive Design" value={80} />
            </div>
          </div>

          {/* Backend Card */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="skill-domain-card skill-card-backend">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-3 rounded-4 bg-purple bg-opacity-15 border border-purple border-opacity-30" style={{ color: "#a855f7" }}>
                    <FaDatabase className="fs-3" />
                  </div>
                  <div>
                    <h3 className="fs-4 fw-bold text-white mb-0">Backend</h3>
                    <div className="text-muted-custom fs-7">APIs & Server Systems</div>
                  </div>
                </div>
                <span className="skill-level-badge badge-advanced">Advanced</span>
              </div>

              <ProgressBar label="Node.js" value={85} />
              <ProgressBar label="Express.js" value={80} />
              <ProgressBar label="MongoDB & Mongoose" value={80} />
              <ProgressBar label="RESTful API Design" value={85} />
            </div>
          </div>

          {/* DevOps & Cloud Card */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="skill-domain-card skill-card-devops">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-3 rounded-4 bg-success bg-opacity-15 border border-success border-opacity-30 text-success">
                    <FaServer className="fs-3" />
                  </div>
                  <div>
                    <h3 className="fs-4 fw-bold text-white mb-0">DevOps & Cloud</h3>
                    <div className="text-muted-custom fs-7">CI/CD & Containers</div>
                  </div>
                </div>
                <span className="skill-level-badge badge-proficient">Proficient</span>
              </div>

              <ProgressBar label="Docker Containers" value={80} />
              <ProgressBar label="Kubernetes" value={75} />
              <ProgressBar label="AWS Cloud Services" value={85} />
              <ProgressBar label="Git & GitHub CI/CD" value={85} />
            </div>
          </div>
        </div>

        {/* Interactive Technology Cloud Matrix */}
        <div className="glass-card p-4 p-md-5 text-center" data-aos="zoom-in" data-aos-delay="200">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <FaCheckCircle className="text-info fs-5" />
            <h4 className="fs-5 fw-bold text-white mb-0 font-display">
              Core Tech Stack <span className="gradient-title">& Tools</span>
            </h4>
          </div>
          <p className="text-muted-custom fs-6 mb-4">
            Hover over any technology badge to view stack specialization.
          </p>

          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
            <div className="tech-pill-item">
              <FaReact className="text-info fs-4" /> <span>React.js</span>
            </div>
            <div className="tech-pill-item">
              <FaNodeJs className="text-success fs-4" /> <span>Node.js</span>
            </div>
            <div className="tech-pill-item">
              <SiExpress className="text-warning fs-4" /> <span>Express.js</span>
            </div>
            <div className="tech-pill-item">
              <SiMongodb className="text-success fs-4" /> <span>MongoDB</span>
            </div>
            <div className="tech-pill-item">
              <FaDocker className="text-primary fs-4" /> <span>Docker</span>
            </div>
            <div className="tech-pill-item">
              <SiKubernetes className="text-info fs-4" /> <span>Kubernetes</span>
            </div>
            <div className="tech-pill-item">
              <FaAws className="text-warning fs-4" /> <span>AWS Cloud</span>
            </div>
            <div className="tech-pill-item">
              <SiJavascript className="text-warning fs-4" /> <span>JavaScript (ES6+)</span>
            </div>
            <div className="tech-pill-item">
              <SiHtml5 className="text-danger fs-4" /> <span>HTML5</span>
            </div>
            <div className="tech-pill-item">
              <SiCss3 className="text-info fs-4" /> <span>CSS3</span>
            </div>
            <div className="tech-pill-item">
              <SiBootstrap className="text-purple fs-4" style={{ color: "#a855f7" }} /> <span>Bootstrap</span>
            </div>
            <div className="tech-pill-item">
              <FaGitAlt className="text-danger fs-4" /> <span>Git / GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
