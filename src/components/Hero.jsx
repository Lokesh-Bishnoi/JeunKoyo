import { useState } from "react";
import React from "react";
import About from "../components/About";
import { Link } from "react-router-dom";
// import black from "../images/png/black-bg-star.png";
import noodles from "../images/svg/hero-noodles.svg";


function Hero() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="min-vh-100 d-flex flex-column">
        <div className="container_2">
          <div className="d-flex justify-content-between align-items-center py-2">
            <p className="ff-Hallelujah ms-5 fs_lg fw_regular color_orange">
              <span className="color_55">Jeun</span>Koyo
            </p>
            <div className="ff-mono">
              <Link to="/Main">
                <a className="ff-Raleway fw_regular fs_base nav_link" href="#">
                  Home
                </a>
              </Link>
              <Link to="/contact">
                <a
                  className="ms-5 ff-Raleway fw_regular fs_base nav_link"
                  href="#"
                >
                  Menu
                </a>
              </Link>
              <Link to="/faq">
                <a
                  className="ms-5 ff-Raleway fw_regular fs_base nav_link "
                  href="#"
                >
                  Reservations
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
            </div>
            <button
              onClick={() => setNavShow(false)}
              className="bg-transparent btn cross"
            ></button>
          </div>
        </div>

        <section className="ff-Raleway d-flex align-items-center justify-content-center flex-grow-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className="fs_base fw_regular color_light_grey text-center">
                  Dine-In
                </p>
                <p className="fs_lg fw_bold color_black text-center">
                  <span className="d-block">Get Served With</span>{" "}
                  <span className="color_orange">Tasty,Hot</span> and{" "}
                  <span className="color_orange">Delicious</span>{" "}
                  <span className="d-block">Meals.</span>
                </p>
                <div className="text-center">
                  <a
                    className="explore_btn fs_lg fw_semibold text-white d-inline-block"
                    href="#"
                  >
                    Explore
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <img className="w-100" src={noodles} alt="noodles" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <About />
    </>
  );
}
export default Hero;
