import React from 'react';

const Header = () => {
  return (
    <header className="py-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {/* Logo on the left */}
          <div className="col-6 col-lg-2">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              {/* Adjust the logo or text as per your design */}
              <p className="fs-2 text-warning fst-italic fw-bold">
                {" "}
                {"< Yatendra />"}{" "}
              </p>
            </a>
          </div>

          {/* Navigation links and toggle button */}
          <div className="col-6 col-lg-10 text-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-white">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-white">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-white">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
