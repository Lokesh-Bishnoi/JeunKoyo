import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import cross from "../images/png/cross.png";
import shop from "../images/svg/shopping_cart.svg";

const Pattey = () => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="container-fluid px-5">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center py-2">
            <p className="ff-Hallelujah ms-lg-5 fs_lg fw_regular color_orange">
              <span className="color_55">Jeun</span>Koyo
            </p>
            <div className="ff-mono ms-5 ps-5">
              <Link>
                <a
                  className="ff-Raleway fw_regular fs_base color_black ms-5 nav_menu"
                  href="#"
                >
                  Home
                </a>
              </Link>
              <Link>
                <a
                  className="ms-5 ff-Raleway fw_regular fs_base color_black nav_menu"
                  href="#"
                >
                  Menu
                </a>
              </Link>
              <a
                href="#"
                onClick={() => setNavShow(true)}
                className="text-white py-1 me-3 ms-4 blk_btn"
              >
                <span className="line d-block"></span>
                <span className="line d-block"></span>
                <span className="line d-block"></span>
              </a>
            </div>
          </div>
          <div>
            <img src={shop} alt="" />
          </div>
        </div>
        <div className={`${navShow ? "nav-fix bg_orangee" : " fix-navbar"}`}>
          <div className=" text-center trans ff-Raleway">
            <Link to="/home">
              <a className="text-white fs-5 " href="#">
                Home
              </a>
            </Link>
            <Link to="/contact">
              <a className="text-white fs-5 mt-4 " href="#">
                Menu
              </a>
            </Link>
          </div>
          <button
            onClick={() => setNavShow(false)}
            className="bg-transparent btn cross"
          >
            <img src={cross} alt="cross-img" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pattey;
