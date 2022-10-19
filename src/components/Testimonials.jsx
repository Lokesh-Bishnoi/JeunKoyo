import React from "react";
import item_1 from "../images/svg/item_1.svg";
import item_2 from "../images/svg/item_2.svg";
import item_3 from "../images/svg/item_3.svg";

const Testimonials = () => {
  return (
    <>
      {/* Testimonials section */}
      <section>
        <div className="container py-4 mt-4">
          <h2 className="ff_raleway fw_semibold fs_xl color_orange text-center">
            Testimonials
          </h2>
          <h4 className="mt-5 ff_raleway fw_regular fs_lg color_black text-center">
            Here’s what people had to say
          </h4>

          <div className="row justify-content-center mt-4">
            <div className="col-md-6 col-lg-4 h-100">
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <img src={item_1} alt="items" />
                <h3 className="ff_raleway fw_regular fs_sm color_black ms-4">
                  Rush Sycamore
                </h3>
              </div>
              <p className="ff_raleway fw_regular fs_sm color_black px-2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className="col-md-6 col-lg-4 h-100 mt-4 mt-lg-0">
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <img src={item_2} alt="items" />
                <h3 className="ff_raleway fw_regular fs_sm color_black ms-4">
                  Wealth Richness
                </h3>
              </div>
              <p className="ff_raleway fw_regular fs_sm color_black px-2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className="col-md-6 col-lg-4 h-100 mt-4 mt-lg-0">
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <img src={item_3} alt="items" />
                <h3 className="ff_raleway fw_regular fs_sm color_black ms-4">
                  Grantress Silktree
                </h3>
              </div>
              <p className="ff_raleway fw_regular fs_sm color_black px-2 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
          </div>

          <div className="orange_border_box text-center mt-4 mt-xl-0">
            <h2 className="ff_raleway fw_semibold fs_base color_orange">
              Subscribe To Our Newsletter
            </h2>
            <p className="ff_raleway fw_redular fs_sm color_orange">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <div className="w-100 mt-4">
              <input type="text" placeholder="Email Address" />
              <button className="btn_box ff_raleway fw_semibold fs_sm" type="submit"> 
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
