import React from "react";
import Btn from "./Btn";
import image1 from "../images/svg/food-img-1.svg";
import image2 from "../images/svg/food-img-2.svg";
import image3 from "../images/svg/food-img-3.svg";
import image4 from "../images/svg/food-img-4.svg";
import image5 from "../images/svg/food-img-5.svg";
import image6 from "../images/svg/food-img-6.svg";

const Menu = () => {
  return (
    <>
      <section className="ff-Raleway py-5 mt-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 fs_xl fw_semibold color_orange">
              Our Popular Menu
            </p>
            <Btn text="Full Menu" href="#" />
          </div>

          <div className="row align-items-center ms-lg-5 ps-lg-5 pt-5">
            <div className="col-lg-6">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-5">
                  <img src={image1} alt="food-image" className="w-100" />
                </div>
                <div className="col-lg-7">
                  <p className="text-center fs_md fw_regular color_black">
                    Pan Seered Omelet Steak
                  </p>
                  <p className="text-center fs_xsm fw_regular color_light_grey lh_17">
                    Eggs, Ram Meat, Bolognaise, Margarine,{" "}
                    <span className="d-xl-block">
                      Eggplant, Beans, Dry Pepper,
                    </span>{" "}
                    Lemongrass,Bay Leaves
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center ms-lg-4">
            <div className="col-lg-6">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
                  <img src={image2} alt="food-image" className="w-100" />
                </div>
                <div className="col-lg-6">
                  <p className="text-center fs_md fw_regular color_black">
                    Pasta Fiesta
                  </p>
                  <p className="text-center fs_xsm fw_regular color_light_grey lh_17">
                    Pasta,Tomatoes, Lettuces, Olive{" "}
                    <span className="d-xl-block">
                      Olive, Vinegar, Soy Sauce,Puree,
                    </span>{" "}
                    Melo Seeds, Chia
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <img src={image3} alt="food-image" className="w-100" />
                </div>
                <div className="col-lg-7">
                  <p className="text-center fs_md fw_regular color_black">
                    ‘Daily’ Bread and Milk Sauce
                  </p>
                  <p className="text-center fs_xsm fw_regular color_light_grey lh_17">
                    Cow Milk, Butter, Egg White, Flour White,{" "}
                    <span className="d-xl-block">
                      Cocoa Powder, Brown Sugar,
                    </span>{" "}
                    Neat Scotch,Salt
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-5">
                  <img src={image4} alt="food-image" className="w-100" />
                </div>
                <div className="col-lg-6">
                  <p className="text-center fs_md fw_regular color_black">
                    ‘Stirred’ Brown Cocoa Soup with Molten Bread
                  </p>
                  <p className="text-center fs_xsm fw_regular color_light_grey lh_17">
                    Flour, Yeast, Fresh Cocoa, Baking Soad. Basil. Papaya,Chia
                    Seed,Grounded Beef, Black Pepper
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <img src={image5} alt="food-image-5" className="w-100" />
                </div>
                <div className="col-lg-6">
                  <p className="text-center fs_md fw_regular color_black">
                    Yellow ‘Cider’ Noodle{" "}
                    <span className="d-xl-block">Soup</span>
                  </p>
                  <p className="text-center fs_xsm fw_regular color_light_grey lh_17">
                    Yellow bay leaves, BlackSeeds, Ramen{" "}
                    <span className="d-xl-block">Seasoning, Mimee Leaves,</span>{" "}
                    Lemongrass, Pan Sauteed Cider
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <img className="w-100" src={image6} alt="food-image-6" />
                </div>
                <div className="col-lg-6">
                  <p className="text-center fs_md fw_regular color_black">
                    Stir Fry Spaghetti
                  </p>
                  <p className="text-center fs_xsm fw_regular color_light_grey lh_17">
                    Handmade Pasta, Easter Eggs,{" "}
                    <span className="d-xl-block">
                      Tomatoes, Black Seeds, Nickel Pepper,
                    </span>{" "}
                    Oda Leaves
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
