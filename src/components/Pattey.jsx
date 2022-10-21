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
      <div className="container-fluid px-md-5">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center py-2">
            <p className="ff-Hallelujah ms-lg-5 fs_lg fw_regular color_orange">
              <span className="color_55">Jeun</span>Koyo
            </p>
            <div className="ff-mono ms-5 ps-5">
              <Link to="/">
                <a
                  className="ff-Raleway fw_regular fs_base color_black ms-5 nav_menu"
                  href="#"
                >
                  Home
                </a>
              </Link>
              <Link to="/Beffypatty">
                <a
                  className="ms-5 ff-Raleway fw_regular fs_base menue color_black nav_menu"
                  href="#"
                >
                  Menu
                </a>
              </Link>
            </div>
          </div>
          <div>
            <Link to="/Addtocart">
              <img src={shop} alt="shop" className="" />
            </Link>
          </div>
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
        <div className={`${navShow ? "nav-fix bg_orangee" : " fix-navbar"}`}>
          <div className="d-flex justify-content-center align-items-center flex-column text-center trans ff-Raleway">
            <Link to="/">
              <a className="text-white fs-5" href="#">
                Home
              </a>
            </Link>
            <Link className="mt-4" to="/Beffypatty">
              <a className="text-white fs-5 " href="#">
                Menu
              </a>
            </Link>
          </div>
          <a
            href="#"
            onClick={() => setNavShow(false)}
            className="bg-transparent btn cross"
          >
            <img src={cross} alt="cross-img" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Pattey;
