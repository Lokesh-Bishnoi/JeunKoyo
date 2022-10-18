import React from "react";
import Btn from "./Btn";
import "../App.css";
import "../Footer.css";
import dinning_table from "../images/png/dinning-table.png";
const Main = () => {
  return (
    <>
      <section className="bg_orange py-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <img src={dinning_table} alt="dinning-table" className="w-100" />
            </div>
            <div className="col-6">
              <div className="text-center">
                <h2 className="ff-raleway fw_semibold fs_xl text-center">
                  Get Served With
                  <span className="d-block">
                    <span className="color_orange">Healthy,Delicious</span>{" "}
                    Meals
                  </span>
                  <span className="d-inline-block"></span>
                </h2>
                <p className="px_230 ff_raleway fw_semibold fs_md color_black">
                  Vegetarian? Vegan? We have meals that will absolutely suit
                  your lifestyle. Come dine with us and thank us later!
                </p>
                <Btn text="See Menu" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
