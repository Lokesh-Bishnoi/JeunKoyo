import React from "react";
import Slider from "react-slick";
import item_1 from "../images/svg/item_1.svg";
import item_2 from "../images/svg/item_2.svg";
import item_3 from "../images/svg/item_3.svg";

const Slide = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "-120px",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section className="ff-Raleway py-md-5">
      <div className="container  position-relative py-5">
        <Slider {...settings}>
          <div className="pe-3">
            <div className="d-flex align-items-center">
              <img src={item_1} alt="blue" />
              <p className="ms-4 fs_sm fw_regular color_black">Rush Sycamore</p>
            </div>
            <p className="pt-4 ff-Raleway fs_sm fw_regular text-black lh_21">
              Lorem ipsum dolor sit amet, consectetur{" "}
              <span className="d-xl-block">
                adipiscing elit, sed do eiusmod tempor
              </span>{" "}
              <span className="d-xl-block">
                incididunt ut labore et dolore magna
              </span>{" "}
              aliqua. Ut enim ad minim veniam,
            </p>
          </div>
          <div className="pe-3">
            <div className="d-flex align-items-center">
              <img src={item_2} alt="blue" />
              <p className="ms-4 fs_sm fw_regular color_black">
                Wealth Richness
              </p>
            </div>
            <p className="pt-4 ff-Raleway fs_sm fw_regular text-black lh_21">
              Lorem ipsum dolor sit amet, consectetur{" "}
              <span className="d-xl-block">
                adipiscing elit, sed do eiusmod tempor
              </span>{" "}
              <span className="d-xl-block">
                incididunt ut labore et dolore magna aliqua.
              </span>{" "}
              Ut enim ad minim veniam,
            </p>
          </div>
          <div className="pe-3">
            <div className="d-flex align-items-center">
              <img src={item_3} alt="blue" />
              <p className="ms-4 fs_sm fw_regular color_black">
                Grantress Silktree
              </p>
            </div>
            <p className="pt-4 ff-Raleway fs_sm fw_regular text-black lh_21">
              Lorem ipsum dolor sit amet, consectetur{" "}
              <span className="d-xl-block">
                adipiscing elit, sed do eiusmod tempor
              </span>{" "}
              <span className="d-xl-block">
                incididunt ut labore et dolore magna aliqua. Ut
              </span>{" "}
              enim ad minim veniam,
            </p>
          </div>
          <div className="pe-3">
            <div className="d-flex align-items-center">
              <img src={item_2} alt="blue" />
              <p className="ms-4 fs_sm fw_regular color_black">
                Wealth Richness
              </p>
            </div>
            <p className="pt-4 ff-Raleway fs_sm fw_regular text-black lh_21">
              Lorem ipsum dolor sit amet, consectetur{" "}
              <span className="d-xl-block">
                adipiscing elit, sed do eiusmod tempor
              </span>{" "}
              <span className="d-xl-block">
                incididunt ut labore et dolore magna aliqua. Ut
              </span>{" "}
              enim ad minim veniam,
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Slide;
