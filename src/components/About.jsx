import React from "react";
import Btn from "./Btn";

const About = () => {
  return (
    <>
      <section className="ff-Raleway">
        <div className="container">
          <p className="fs_xl text-center color_orange fw_semibold">About Us</p>
          <p className="fs_base fw_regular text-center mb-5 lh_35">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
            <span className="d-xl-block">
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud
            </span>{" "}
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="row py-3">
            <div className="col-lg-4 col-sm-6">
              <div className="text-center pt-3">
                <Btn text="Chefs" href="#" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="text-center pt-3">
                <Btn text="Staffs" href="#" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mx-auto">
              <div className="text-center pt-3">
                <Btn text="Events" href="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
