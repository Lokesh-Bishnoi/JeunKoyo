import React, { useState } from "react";
import beeffyPatty from "../images/svg/beeffyPatty.svg";
import beeffyPatty2 from "../images/svg/beeffyPatty2.svg";
import add from "../images/png/add.png";
import Pattey from "./Pattey";
import green from "../images/svg/greenTick.svg";

const Beffypatty = () => {
  const [image, setImage] = useState(true);
  const [image1, setImage1] = useState(true);
  const [image2, setImage2] = useState(true);
  const [image3, setImage3] = useState(true);
  // const [image4, setImage4] = useState(true);
  // const [image5, setImage5] = useState(true);
  // const [image6, setImage6] = useState(true);
  // const [image7, setImage7] = useState(true);
  // const [image8, setImage8] = useState(true);
  // const [image9, setImage9] = useState(true);
  // const [image10, setImage10] = useState(true);
  // const [image11, setImage1]1 = useState(true);
  // const [image12, setImage1] 2= useState(true);
  return (
    <>
      <Pattey />
      <section className="ff-Raleway">
        <div className="container">
          <div className="row mt-lg-5 pt-lg-5">
            {/* <div className="col-lg-2">
              <img src={beeffyPatty} alt="beeffyPatty" className="w-100" />
              <p className="text-center pt-3 fs_sm fw_semibold color_black">
                Beefy Patty{" "}
                <span className="d-xl-block fw_regular">#3,500</span>
              </p>
            </div>
            <div className="col-lg-2">
              <img src={beeffyPatty2} alt="beeffyPatty " className="w-100" />
            </div>   */}
            <div className="col-lg-2">
              <div className="text-center position-relative">
                {image ? (
                  <img src={beeffyPatty} alt="beeffyPatty" className="w-100" />
                ) : (
                  <img src={green} alt="beeffyPatty2" className="w-100" />
                )}
                <button
                  className="add_btn position-absolute top-0 end-0"
                  onClick={() => setImage(false)}
                >
                  <img src={add} alt="add" />
                </button>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="text-center position-relative">
                {image1 ? (
                  <img src={beeffyPatty} alt="beeffyPatty" className="w-100" />
                ) : (
                  <img src={green} alt="beeffyPatty2" className="w-100" />
                )}
                <button
                  className="add_btn position-absolute top-0 end-0"
                  onClick={() => setImage1(false)}
                >
                  <img src={add} alt="add" />
                </button>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="text-center position-relative">
                {image2 ? (
                  <img src={beeffyPatty} alt="beeffyPatty" className="w-100" />
                ) : (
                  <img src={green} alt="beeffyPatty2" className="w-100" />
                )}
                <button
                  className="add_btn position-absolute top-0 end-0"
                  onClick={() => setImage2(false)}
                >
                  <img src={add} alt="add" />
                </button>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="text-center position-relative">
                {image3 ? (
                  <img src={beeffyPatty} alt="beeffyPatty" className="w-100" />
                ) : (
                  <img src={green} alt="beeffyPatty2" className="w-100" />
                )}
                <button
                  className="add_btn position-absolute top-0 end-0"
                  onClick={() => setImage3(false)}
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
