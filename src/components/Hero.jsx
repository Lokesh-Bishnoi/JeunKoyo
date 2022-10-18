import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg-dark">
        <div className="container py-4 ">
          <div className="d-flex justify-content-between align-items-center py-2">
            <p className="fs-5 text-white">LOGO</p>
            <div className="ff-mono">
              <Link to="/home">
                <a className="ms-4 fs-5 nav_link" href="#">
                  Home
                </a>
              </Link>
              <Link to="/contact">
                <a className="ms-4 fs-5 nav_link" href="#">
                  Contact
                </a>
              </Link>
              <Link to="/faq">
                <a className="ms-4 fs-5 nav_link " href="#">
                  Faq
                </a>
              </Link>
              <Link to="/form">
                <a className="ms-4 fs-5 text-white  login_btn" href="#">
                  Log-In
                </a>
              </Link>
              <a
                href="#"
                onClick={() => setNavShow(true)}
                className=" bg-dark text-white py-1 me-3 ms-4 blk_btn"
              >
                <span className="line d-block"></span>
                <span className="line d-block"></span>
                <span className="line d-block"></span>
              </a>
            </div>
          </div>

          <div className={`${navShow ? "nav-fix bg-danger" : " fix-navbar"}`}>
            <div className="d-flex justify-content-center align-items-center flex-column trans ff-mono">
              <Link to="/home">
                <a className="text-white fs-5 nav_bar" href="#">
                  Home
                </a>
              </Link>
              <Link to="/contact">
                <a className="text-white fs-5 mt-4 nav_bar" href="#">
                  Contact
                </a>
              </Link>
              <Link to="/faq">
                <a className="text-white fs-5 mt-4 nav_bar" href="#">
                  Faq
                </a>
              </Link>
              <Link to="/form">
                <a className="fs-5 mt-4 text-white nav_bar login_btn" href="#">
                  Log-In
                </a>
              </Link>
            </div>
            <button
              onClick={() => setNavShow(false)}
              className="bg-transparent btn cross"
            >
              <img src={close} alt="close" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
