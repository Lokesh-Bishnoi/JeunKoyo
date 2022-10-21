import React, { useState } from "react";
import beeffyPatty from "../images/svg/beeffyPatty.svg";
import beeffyPatty2 from "../images/svg/beeffyPatty2.svg";
import add from "../images/png/add.png";

const Beffypatty = () => {
  const [image, setImage] = useState(true);
  return (
    <>
      <section className="ff-Raleway">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <img src={beeffyPatty} alt="beeffyPatty" className="w-100" />
              <p className="text-center pt-3 fs_sm fw_semibold color_black">
                Beefy Patty{" "}
                <span className="d-xl-block fw_regular">#3,500</span>
              </p>
            </div>
            <div className="col-lg-2">
              <img src={beeffyPatty2} alt="beeffyPatty " className="w-100" />
            </div>
            <div className="col-lg-2">
              <div className="text-center position-relative">
                {image ? (
                  <img src={beeffyPatty} alt="beeffyPatty" className="w-100" />
                ) : (
                  <img
                    src={beeffyPatty2}
                    alt="beeffyPatty2"
                    className="w-100"
                  />
                )}
                <button
                  className="add_btn position-absolute top-0 end-0"
                  onClick={() => setImage(!image)}
                >
                  <img src={add} alt="add" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Beffypatty;
