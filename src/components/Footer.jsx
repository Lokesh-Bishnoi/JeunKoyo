import { Link } from "react-router-dom";
import React from "react";
import logo from "../images/svg/logo.svg";
import twitter from "../images/svg/twitter.svg";
import fb from "../images/svg/fb.svg";
import insta from "../images/svg/insta.svg";

const Footer = () => {
  return (
    <>
      <section className="bg_orange1 py-md-5">
        <div className="container py-4">
          <div className="row align-items-lg-center justify-content-between mt-4">
            <div className="col-6 col-lg-1 py-4 d-none d-lg-block">
              <Link to="/">
                <a className="ff_raleway fw_semibold fs_md color_pink" href="#">
                  Home
                </a>
              </Link>
            </div>
            <div className="col-6 col-lg-2 py-4 d-none d-lg-block">
              <Link to="/Beffypatty">
                <a className="ff_raleway fw_semibold fs_md color_pink" href="#">
                  Add to Cart
                </a>
              </Link>
            </div>
            <div className="col-lg-4 py-4">
              <img src={logo} alt="logo" className="w-100" />
              <p className="ff_raleway fw_regular fs_sm color_pink text-center">
                Beef is one of the popular types of meat. Rich in high-quality
                protein, vitamins
              </p>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <a className="mx-3" href="#">
                  <img src={twitter} alt="twitter" />
                </a>
                <a className="mx-3" href="#">
                  <img src={fb} alt="fb" />
                </a>
                <a className="mx-3" href="#">
                  <img src={insta} alt="insta" />
                </a>
              </div>
            </div>
            <div className="col-6 col-lg-2 py-4">
              {" "}
              <div className="d-lg-none mb-4">
                <Link to="/Beffypatty">
                  <a
                    className="ff_raleway fw_semibold fs_md color_pink"
                    href="#"
                  >
                    Home
                  </a>
                </Link>
              </div>
              <Link to="/Beffypatty">
                <a className="ff_raleway fw_semibold fs_md color_pink" href="#">
                  Menu
                </a>
              </Link>
            </div>
            <div className="col-6 col-lg-2 py-4">
              <div className="d-lg-none mb-4">
                <Link to="/Beffypatty">
                  <a
                    className="ff_raleway fw_semibold fs_md color_pink"
                    href="#"
                  >
                    Add to Cart
                  </a>
                </Link>
              </div>
              <Link to="/Beffypatty">
                <a
                  className="ff_raleway fw_semibold fs_md color_pink text-nowrap"
                  href="#"
                >
                  Book Reservations
                </a>
              </Link>
            </div>

            {/* <div className="col-lg-4">
              <ul className=" p-0">
                <li className="mt-lg-3">
                  <Link to="/">
                    <a
                      className="ff_raleway fw_semibold fs_md color_pink"
                      href="#"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="mt-lg-3">
                  <Link to="/Beffypatty">
                  <a
                    className="ff_raleway fw_semibold fs_md color_pink"
                    href="#"
                  >
                    Menu
                  </a></Link>
                </li>
                <li className="mt-lg-3">
                  <Link to="/Addtocart">
                  <a
                    className="ff_raleway fw_semibold fs_md color_pink"
                    href="#"
                  >
                    Add to cart
                  </a></Link>
                </li>
                <li className="mt-lg-3">
                  <Link to="/Reservations">
                  <a
                    className="ff_raleway fw_semibold fs_md color_pink"
                    href="#"
                  >
                    Book Reservations
                  </a></Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
