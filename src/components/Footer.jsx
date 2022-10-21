import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg_orange1 py-md-5">
        <div className="container py-4">
          <div className="row align-items-center justify-content -center">
            <div className="col-lg-4">
              <ul className="p-0">
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
            </div>
            <div className="col-lg-4">
              <ul className="p-0">
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
            </div>
            <div className="col-lg-4">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
