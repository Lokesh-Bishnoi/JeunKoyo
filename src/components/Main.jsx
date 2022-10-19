import React from "react";
import Btn from "./Btn";
import "../App.css";
import "../Footer.css";
import dinning_table from "../images/png/dinning-table.png";
const Main = () => {
  return (
    <>
      {/* background orange section */}
      <section className="bg_orange py-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <img src={dinning_table} alt="dinning-table" className="w-100" />
            </div>
            <div className="col-lg-5 my-4 mt-lg-0">
              <div className="text-center">
                <h2 className="ff-raleway m-0 fw_semibold fs_xl text-center">
                  Get Served With
                  <span className="d-block">
                    <span className="color_orange">Healthy , Delicious</span>{" "}
                    Meals
                  </span>
                </h2>
                <p className="ff_raleway my-4 fw_semibold fs_md color_black">
                  Vegetarian? Vegan? We have meals that{" "}
                  <span className="d-xl-block">
                    will absolutely suit your lifestyle. Come 
                  </span>
                  <span className="d-xl-block">
                          dine with us and thank us later!
                  </span>
                </p>
                <Btn text="See Menu" href="#" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose jeunkoyo */}
      <section>
        <div className="container py-5 mt-4">
          <h2 className="ff_raleway fw_regular fs_xl text-center color_black">
            Why Choose Jeunkoyo
          </h2>

          <div className="row justify-content-center mt-5 pt-3">
            <div className="col-md-6 col-lg-4">
              <div className="text-center box_white">
                <div className="col_svg">
                  <svg
                    width="67"
                    height="63"
                    viewBox="0 0 67 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.4 13.3333L38.0333 0H23.3333V6.66667H35.3L41.9667 13.3333H15C6.66667 13.3333 0 20 0 28.3333C0 36.6667 6.66667 43.3333 15 43.3333C22.4 43.3333 28.5333 37.9333 29.7333 30.9L36.8 26.6667C36.6667 27.2333 36.6667 27.7667 36.6667 28.3333C36.6667 36.6667 43.3333 43.3333 51.6667 43.3333C60 43.3333 66.6667 36.6667 66.6667 28.3333C66.6667 20 60 13.3333 51.6667 13.3333H51.4ZM22.8 30.8667C21.6667 34.2333 18.6 36.6667 14.9 36.6667C12.6899 36.6667 10.5702 35.7887 9.00744 34.2259C7.44464 32.6631 6.56667 30.5435 6.56667 28.3333C6.56667 26.1232 7.44464 24.0036 9.00744 22.4408C10.5702 20.878 12.6899 20 14.9 20C18.6333 20 21.6667 22.4667 22.8 25.8333H13.3333V30.8333L22.8 30.8667ZM51.5667 36.6667C49.3565 36.6667 47.2369 35.7887 45.6741 34.2259C44.1113 32.6631 43.2333 30.5435 43.2333 28.3333C43.2333 26.1232 44.1113 24.0036 45.6741 22.4408C47.2369 20.878 49.3565 20 51.5667 20C53.7768 20 55.8964 20.878 57.4592 22.4408C59.022 24.0036 59.9 26.1232 59.9 28.3333C59.9 30.5435 59.022 32.6631 57.4592 34.2259C55.8964 35.7887 53.7768 36.6667 51.5667 36.6667ZM30 53.3333H16.6667L36.6667 63.3333V56.6667H50L30 46.6667V53.3333Z"
                      fill="#FB6602"
                    />
                  </svg>
                </div>
                <h3 className="ff_raleway fw_regular fs_base color_black mt-3">
                  Swift Delivery
                </h3>
                <p className="ff_raleway fw_regular fs_xsm color_55 mt-2 opacity-75">
                  Order your meals right from the comfort of your home and get
                  it delivered within few minutes!
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="text-center box_white">
                <div>
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_21_35)">
                      <path
                        d="M59.5225 54.2874C59.5225 60.8412 46.2 66.1599 29.7625 66.1599C13.3275 66.1599 0 60.8412 0 54.2874C0 47.7249 13.3275 42.4099 29.7625 42.4099C46.2 42.4099 59.5225 47.7249 59.5225 54.2874"
                        fill="#FB6602"
                      />
                      <path
                        d="M49.7775 67.955C66.2135 67.955 79.5375 62.6395 79.5375 56.0825C79.5375 49.5255 66.2135 44.21 49.7775 44.21C33.3415 44.21 20.0175 49.5255 20.0175 56.0825C20.0175 62.6395 33.3415 67.955 49.7775 67.955Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M40.8462 63.8876C28.2587 63.8876 16.9712 61.1425 9.32123 56.8C9.24498 57.3863 9.19873 57.9788 9.19873 58.58C9.19873 69.9175 23.1475 79.1088 40.3525 79.1088C57.56 79.1088 71.5087 69.9163 71.5087 58.58C71.5087 58.1475 71.4837 57.7226 71.44 57.2988C63.8262 61.3501 52.935 63.8876 40.8437 63.8876"
                        fill="#FB6602"
                      />
                      <path
                        d="M24.8338 62.3187C18.8275 61.0862 13.5213 59.1887 9.32379 56.8037C9.24754 57.39 9.20129 57.9825 9.20129 58.5837C9.20129 69.9212 23.15 79.1125 40.355 79.1125C41.7113 79.1125 43.0438 79.0475 44.3575 78.9375C33.91 76.2275 26.225 69.9175 24.8338 62.3187"
                        fill="#FB6602"
                      />
                      <path
                        d="M74.3295 41.1552C75.9855 48.6379 62.1157 58.0689 43.3619 62.2193C24.6021 66.371 8.04982 63.6637 6.39572 56.1895C4.73919 48.7044 18.6032 39.2644 37.363 35.1127C56.1167 30.9623 72.6719 33.6652 74.3295 41.1552Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M40.1124 60.0113C56.5491 60.0113 69.8737 54.6941 69.8737 48.135C69.8737 41.576 56.5491 36.2588 40.1124 36.2588C23.6758 36.2588 10.3512 41.576 10.3512 48.135C10.3512 54.6941 23.6758 60.0113 40.1124 60.0113Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M17.2 38.6863C15.045 40.59 12.7863 42.3538 10.5513 44.1613C8.56253 45.7638 11.1025 48.7088 13.1875 47.5725C15.1325 46.5188 17.0625 45.485 19.1213 44.6675C18.3025 43.6 17.48 42.5363 16.6625 41.4688C16.123 42.3434 15.5183 43.1762 14.8538 43.96C13.4225 45.7625 15.2463 48.8113 17.49 47.3738C18.975 46.4263 20.4363 45.4788 21.985 44.6388L19.0113 41.6675C18.48 42.555 18.065 43.4563 17.6413 44.4025C16.8475 46.1575 18.6488 48.7938 20.615 47.3763C22.2125 46.2288 23.7238 45.0588 25.16 43.7113C27.09 41.9125 24.65 39.3363 22.5263 40.2975C22.4063 40.4275 22.2938 40.5575 22.1788 40.6888C21.9188 41.6825 21.6575 42.6738 21.4 43.6625C22.2592 43.1189 23.2068 42.7297 24.2 42.5125C26.3338 41.895 26.2188 38.9925 24.2 38.3213C24.0038 38.255 23.81 38.1888 23.615 38.125V42.3188C24.585 41.9525 25.5325 41.7375 26.55 41.5375C25.9888 40.2113 25.4325 38.8838 24.8725 37.5613C21.3463 39.3038 10.1713 42.0938 14.125 48.1613C14.7475 47.065 15.375 45.9788 16.0025 44.8863C15.6088 44.8475 15.2163 44.8088 14.8225 44.7675C12.4 44.255 11.035 47.385 13.1463 48.745C13.8838 49.2738 14.665 49.7325 15.4888 50.115C15.8563 48.7625 16.2213 47.4125 16.5863 46.06C15.6725 46.1188 14.7638 46.1825 13.8525 46.2563C11.0375 46.47 11.0688 50.3488 13.8525 50.605C16.7263 50.8663 20.465 51.6475 23.1488 50.1625C24.0025 49.685 24.4813 49.265 25.1188 48.5625C25.5675 48.0663 26.04 47.5975 26.52 47.1325C28.7 45.0288 25.9375 47.75 25.9463 46.0838L29.22 44.2075C28.8913 44.0125 28.5663 43.8138 28.24 43.62C27.8725 44.97 27.51 46.32 27.14 47.6725C27.885 47.9663 28.625 48.2588 29.3663 48.5463L30.4663 44.4938C29.2969 44.3575 28.1157 44.3575 26.9463 44.4938C25.2875 44.68 24.2625 46.1938 25.0675 47.7675C26.4963 50.5538 29.7488 51.6325 32.63 52.2813C35.3613 52.9063 36.5175 48.7125 33.7863 48.0888C32.0838 47.7025 29.71 47.29 28.8338 45.5763C28.2038 46.6625 27.5838 47.7538 26.9525 48.8463C28.1221 48.7138 29.3029 48.7138 30.4725 48.8463C32.7588 49.1013 33.2513 45.8513 31.57 44.7925C30.11 43.8775 28.8513 43.5138 27.145 43.3238C24.8938 43.0713 24.3263 46.34 26.05 47.3725L27.0275 47.9613C28.4563 48.8213 30.2888 47.715 30.2988 46.0825C30.3238 42.7538 27.9375 40.9475 24.9438 42.8363C23.7038 43.6225 22.675 44.7875 21.705 45.8663C20.195 47.54 15.8575 46.435 13.8588 46.255V50.6038C14.7696 50.5348 15.6809 50.4714 16.5925 50.4138C18.6138 50.2775 19.74 47.425 17.6925 46.36C16.8698 45.9783 16.0851 45.5196 15.3488 44.99C14.7875 46.3175 14.2288 47.64 13.6763 48.9663C14.4436 49.1326 15.2251 49.2251 16.01 49.2425C17.6075 49.2775 18.7838 47.3425 17.885 45.9663C17.3388 45.1238 26.0338 41.8325 27.0775 41.32C29.41 40.1713 27.6925 36.8913 25.3988 37.345C24.3875 37.5438 23.44 37.7638 22.4663 38.1263C20.4613 38.8788 20.3425 41.6113 22.4663 42.32C22.665 42.385 22.8575 42.4513 23.0538 42.5125V38.3213C21.6438 38.7363 20.4425 39.1075 19.21 39.9063C18.315 40.4913 17.6838 41.9125 18.4313 42.8825C20.2313 45.2263 22.1125 45.2438 24.7313 44.0538C23.8513 42.9188 22.9713 41.7788 22.095 40.64C20.9389 41.7125 19.7147 42.7092 18.43 43.6238L21.4063 46.6C21.8325 45.655 22.2413 44.7513 22.7763 43.8638C23.9275 41.945 21.6763 39.87 19.7975 40.8875C18.2488 41.73 16.7888 42.68 15.305 43.6238L17.9363 47.0375C18.8088 45.935 19.6563 44.8388 20.43 43.665C21.4225 42.1588 19.7588 39.7588 17.9713 40.4713C15.5613 41.4338 13.28 42.5813 11.0013 43.8138C11.8788 44.9563 12.76 46.0975 13.64 47.235C15.8713 45.4325 18.13 43.6625 20.2838 41.7613C22.39 39.9038 19.3013 36.8438 17.2063 38.6888"
                        fill="#00A551"
                      />
                      <path
                        d="M23.065 50.3625C24.3925 51.83 26.005 52.3813 27.93 52.68C28.1225 51.2563 28.315 49.8313 28.51 48.4075C28.098 48.3922 27.6945 48.2854 27.3288 48.095C27.1325 49.5213 26.9438 50.945 26.7513 52.3725C29.4238 52.3738 34.4025 52.6725 35.235 49.165C36.2313 44.9713 33.1113 41.5525 29.48 40.085L28.8988 44.3563H29.2913C31.8525 44.3563 32.1075 40.8925 29.8688 40.085C28.57 39.615 27.3238 39.1738 26.0938 38.5463C25.7263 39.8938 25.3638 41.2463 24.9938 42.6C26.2113 42.6625 31.1225 43.9038 30.7175 45.705C30.4838 46.735 30.8838 47.5638 31.7138 48.1638C34.4275 50.11 37.105 52.3463 40.4425 53.0738C42.9125 53.6138 44.15 50.4975 42.1188 49.0988C41.7203 48.827 41.281 48.6207 40.8175 48.4875V52.68L42.1863 52.2888C44.875 51.5225 43.7275 47.3213 41.0275 48.0963C40.5738 48.23 40.1163 48.3625 39.6575 48.4875C37.55 49.0913 37.6263 52.0425 39.6575 52.68C39.7475 52.7388 39.8363 52.7975 39.9213 52.8563C40.48 51.5275 41.0413 50.205 41.5988 48.8788C38.6675 48.235 36.2938 46.1175 33.9125 44.4088L34.91 46.8663C36.125 41.4613 29.4175 38.485 24.9925 38.2475C22.8588 38.135 21.9813 41.3275 23.895 42.3025C25.4575 43.0938 27.0725 43.6838 28.7163 44.2788C28.9075 42.8538 29.0988 41.4313 29.295 40.0038H28.9025C26.2813 40.0038 26.1613 43.4063 28.325 44.2788C29.2463 44.6513 32.4938 47.4075 30.3875 47.9213C29.2588 48.1988 27.9088 48.0275 26.755 48.02C24.1163 48.0188 24.0338 51.4075 26.175 52.2888C26.93 52.6038 27.7063 52.68 28.515 52.7588C30.945 53.0025 31.5088 48.865 29.0925 48.4875C27.9288 48.305 27.0038 48.2375 26.1425 47.2913C24.2575 45.2063 21.1888 48.29 23.07 50.3625"
                        fill="#00A551"
                      />
                      <path
                        d="M65.225 48.7276C63.3575 49.5326 61.485 50.3126 59.645 51.1788C57.71 52.0938 58.6238 55.3976 60.7425 55.2338C62.8325 55.0676 64.8388 54.6138 66.9 54.2576L64.785 50.6288C62.1638 52.9401 57.105 52.4388 53.8313 52.4438C51.4238 52.4463 50.7963 56.2188 53.25 56.7163C55.4963 57.1676 57.5113 57.1276 59.7588 56.7163C61.8325 56.3326 61.8588 52.8788 59.7588 52.5226C55.62 51.8163 51.5638 52.2026 47.3963 52.4126C42.9263 52.6451 38.4438 51.8651 33.9738 51.7751C31.1275 51.7213 31.235 55.8638 33.9738 56.1238C36.455 56.3601 38.7863 56.4263 41.2425 56.0476C43.3213 55.7301 43.3413 52.1488 41.2425 51.8551C36.6638 51.2076 29.4788 50.0426 25.745 53.5276C26.6225 53.4126 27.5013 53.3026 28.3825 53.1863C26.2338 52.2751 24.3013 51.1951 21.93 51.1088C20.4013 51.0526 19.0513 53.0501 20.0538 54.3788C20.4975 54.9763 20.9463 55.5676 21.3863 56.1626C22.3813 55.1713 23.3725 54.1826 24.3625 53.1863C21.1313 51.4313 18.39 49.4238 14.5688 49.5438C12.4563 49.6126 11.5325 52.5038 13.4713 53.5963C20.6075 57.6276 29.125 59.7913 37.3213 59.6963C40.1338 59.6613 40.1163 55.4513 37.3213 55.3476C35.83 55.2863 34.3475 55.1788 32.855 55.1226C30.43 55.0276 29.8563 58.9263 32.28 59.3951C38.865 60.6701 45.3638 60.1501 51.9513 59.1738C54.4325 58.8038 53.755 54.8988 51.375 54.8988H49.5863V59.2476C52.3613 59.2401 55.5038 59.3426 58.0213 57.9563C58.9725 57.4338 64.1263 52.2551 64.5513 52.4851C65.5988 53.0463 66.9138 52.7526 67.5275 51.7038C68.0525 50.8051 68.6188 49.9501 69.0875 49.0226H65.3375C65.9138 49.6851 66.36 50.4313 66.675 51.2538C67.8125 50.3751 68.9538 49.4988 70.0913 48.6201C68.5913 46.7738 66.87 45.7813 64.6725 44.9376C63.725 44.5751 62.72 45.1826 62.2138 45.9363C61.8275 46.4113 61.535 46.9288 61.32 47.5001C62.46 47.3538 63.5963 47.2051 64.7338 47.0576C63.1738 45.6951 62.0513 44.0426 60.28 42.9263C58.4963 41.8076 56.0225 44.0938 57.3038 45.9001C57.7688 46.5576 58.2025 47.0963 58.7613 47.6801C59.465 46.4713 60.17 45.2576 60.8775 44.0476C58.78 43.5888 56.8763 42.9288 54.7175 42.8563C53.3375 42.8051 52.205 44.2876 52.62 45.6051C52.8575 46.4451 53.155 47.2651 53.5113 48.0626L55.0325 45.3826C54.4863 45.5851 54.0825 45.8051 53.63 46.1663C52.865 46.7776 52.855 48.0163 53.2875 48.8001C53.63 49.3738 53.9275 49.9701 54.18 50.5876C54.9975 49.5201 55.8213 48.4563 56.635 47.3913C54.1613 46.9638 52.4213 44.2913 50.61 42.7113C48.8488 41.1801 46.9575 40.4663 44.6838 40.1738C42.1838 39.8563 41.8325 43.7876 44.1063 44.4451C47.095 45.3101 50.0613 45.5976 53.1625 45.6388C56 45.6801 55.92 41.5001 53.1625 41.2888C48.7325 40.9513 47.8363 43.5788 45.155 46.3888L48.8663 47.9263C48.6913 46.2613 52.0875 45.3126 53.1988 44.9263C55.9575 43.9526 58.1913 44.4088 60.7613 45.7888C63.235 47.1138 65.4288 43.3588 62.9575 42.0263C58.8863 39.8413 55.4625 39.5138 51.1313 41.0426C48.1663 42.0863 44.1263 44.2163 44.5188 47.9188C44.7063 49.6851 46.8038 50.9501 48.23 49.4551C49.8525 47.7576 50.435 45.4213 53.1638 45.6288V41.2788C50.4513 41.2438 47.8775 41.0001 45.2638 40.2438L44.685 44.5163C49.1875 45.0913 50.9225 50.7913 55.4863 51.5763C57.4413 51.9113 58.765 50.1826 57.9425 48.3776C57.6924 47.7615 57.3944 47.1659 57.0513 46.5963C56.935 47.4713 56.8225 48.3501 56.7113 49.2288C56.5363 49.3413 56.3688 49.4538 56.2 49.5651C57.2088 49.1976 58.1863 48.0538 57.7163 46.8901C57.3548 46.0961 57.0568 45.2748 56.825 44.4338C56.1238 45.3488 55.4275 46.2701 54.725 47.1863C56.4575 47.2488 58.055 47.8601 59.7225 48.2226C61.8325 48.6851 63.3925 46.2113 61.8388 44.5901C61.58 44.2951 61.3238 43.9926 61.0675 43.6901C60.0713 44.6826 59.0825 45.6751 58.0888 46.6676C59.4975 47.5488 60.4213 49.0338 61.6625 50.1201C62.6288 50.9626 64.45 51.0326 65.075 49.6801C65.29 49.1126 65.5875 48.5901 65.9713 48.1176C65.1538 48.4551 64.3325 48.7838 63.515 49.1213C65.0513 49.7076 65.9938 50.4251 67.0175 51.6801C68.6638 53.7088 71.4488 51.1301 70.43 49.0451C70.1177 48.2295 69.6646 47.4751 69.0913 46.8163C68.2025 45.5963 66.1488 45.2301 65.3413 46.8163C64.8675 47.7426 64.3088 48.6001 63.7813 49.4988C64.77 49.2351 65.7663 48.9788 66.7575 48.7176C64.325 47.4088 62.39 47.9163 60.47 49.8326C59.1275 51.1638 58.325 52.5776 56.73 53.7038C54.715 55.1201 51.9375 54.8838 49.6025 54.8888C46.8 54.8938 46.8 59.2376 49.6025 59.2376H51.39L50.8113 54.9676C45.035 55.8226 39.23 56.3026 33.4538 55.1876C33.2575 56.6101 33.0663 58.0363 32.87 59.4576C34.3625 59.5188 35.8438 59.6263 37.3363 59.6863V55.3376C29.9038 55.4201 22.155 53.4876 15.6775 49.8326C15.315 51.1876 14.9475 52.5363 14.5825 53.8851C17.545 53.7938 19.71 55.5888 22.1838 56.9363C23.9425 57.8913 26.55 55.8163 25.1575 53.9588C24.7138 53.3613 24.2688 52.7688 23.82 52.1713C23.1925 53.2638 22.57 54.3551 21.9438 55.4438C23.49 55.5001 24.815 56.3451 26.1988 56.9326C27.1388 57.3313 28.0438 57.3263 28.8325 56.5938C31.045 54.5313 37.375 55.6563 40.1075 56.0376V51.8451C38.06 52.1526 36.0413 51.9576 33.9925 51.7651V56.1138C38.0175 56.1926 42.0138 56.7088 46.0413 56.7826C50.26 56.8626 54.41 55.9863 58.6163 56.7063V52.5126C57.2387 52.8563 55.7977 52.8563 54.42 52.5126L53.8438 56.7826C58.4963 56.7776 64.17 56.9613 67.8713 53.6913C69.6675 52.1163 67.7038 49.7251 65.7588 50.0588C64.0888 50.3401 62.4538 50.7401 60.7588 50.8738C61.1225 52.2263 61.4913 53.5713 61.8575 54.9238C63.6938 54.0613 65.5688 53.2763 67.4338 52.4751C70 51.3663 67.78 47.6213 65.2388 48.7251"
                        fill="#F6921E"
                      />
                      <path
                        d="M37.75 60.0999C40.4937 60.2374 43.235 60.2374 45.9787 60.0999C48.2962 59.9787 49.0975 56.1799 46.5587 55.8262C43.4137 55.3887 40.31 55.5787 37.1525 55.5962C37.3437 57.0237 37.54 58.4424 37.7312 59.8687C39.995 59.5374 42.1312 59.2562 44.235 58.3037C46.7887 57.1437 44.5737 53.4012 42.04 54.5537C40.3525 55.3162 38.385 55.4162 36.5737 55.6787C34.1 56.0437 34.7587 59.9687 37.1512 59.9549C39.8875 59.9312 42.6825 59.6449 45.405 60.0224C45.595 58.5987 45.7875 57.1762 45.98 55.7499C43.2389 55.8912 40.4923 55.8912 37.7512 55.7499C34.945 55.6087 34.96 59.9624 37.7512 60.1049"
                        fill="#A87C4F"
                      />
                      <path
                        d="M58.1125 47.4487C54.565 48.5112 51.0187 49.1475 47.3175 49.315C44.9912 49.42 44.21 53.245 46.7387 53.5875C47.4247 53.6888 48.1197 53.7147 48.8112 53.665C51.1187 53.5087 51.9512 49.805 49.395 49.3975C49.2302 49.3689 49.0652 49.3418 48.9 49.3162C49.405 49.82 49.9162 50.3287 50.4187 50.8387C50.3612 51.6325 50.38 51.64 50.4637 50.8612C50.428 50.529 50.3788 50.1983 50.3162 49.87C49.8312 47.1087 45.6462 48.2812 46.1225 51.0225C45.9337 49.9387 46.14 51.7687 46.2275 51.9937C46.61 52.96 47.2162 53.425 48.2375 53.5887C48.43 52.1637 48.625 50.7412 48.8125 49.3162C48.5067 49.333 48.2015 49.3601 47.8975 49.3975C47.7075 50.8187 47.5137 52.2425 47.3187 53.665C51.3709 53.486 55.3853 52.8054 59.27 51.6387C61.95 50.8425 60.8037 46.6425 58.1125 47.4487"
                        fill="#A87C4F"
                      />
                      <path
                        d="M37.6 40.6512C41.1962 40.6412 44.7862 40.5337 48.375 40.7999C48.1812 39.3762 47.99 37.9499 47.795 36.5287C46.4162 36.8599 44.9987 36.7949 43.585 36.9012C41.1875 37.0774 40.5687 40.4587 43.01 41.1724C44.2525 41.5387 45.6312 41.6437 46.8312 42.1487C47.0025 40.8237 47.17 39.4974 47.3487 38.1749C44.8862 39.0862 42.4075 39.9099 39.8687 40.5687C38.335 40.9662 37.6887 43.1024 38.9087 44.2037C39.4525 44.6949 39.9275 45.1799 40.5462 45.5899V41.8399C40.2462 42.0374 39.9475 42.2374 39.6487 42.4387C38.5637 43.1612 38.0812 44.8937 39.2075 45.8562C39.8525 46.4087 40.3937 46.9737 41.1425 47.3924L41.6625 43.4124C41.115 43.6474 40.6925 43.8674 40.2537 44.2737C39.2887 45.1587 39.435 47.1124 40.6925 47.6887C41.1725 47.9062 41.6025 48.0962 42.115 48.2037C44.85 48.7724 46.0137 44.5824 43.2725 44.0124C43.1425 43.9849 43.0175 43.9574 42.8912 43.9337L43.33 47.3462C43.1625 47.4337 42.9912 47.5224 42.8212 47.6087C44.44 46.9312 45.1562 44.6412 43.34 43.6299C42.925 43.3974 42.645 43.0824 42.285 42.7724C42.135 43.9112 41.9962 45.0487 41.8437 46.1849C42.1449 45.9912 42.4425 45.7912 42.7425 45.5887C44.1362 44.6612 44.1437 42.7599 42.7425 41.8262C42.4984 41.5831 42.2466 41.348 41.9875 41.1212C41.6637 42.3324 41.345 43.5437 41.0237 44.7562C43.5625 44.0999 46.0487 43.2712 48.5037 42.3587C50.0325 41.7974 50.9487 39.1987 49.0237 38.3874C47.4375 37.7162 45.8062 37.4512 44.165 36.9687C43.9737 38.3949 43.7762 39.8199 43.5837 41.2412C45.395 41.1112 47.1775 41.1437 48.9537 40.7149C51.4537 40.1149 50.72 36.6162 48.3737 36.4437C44.785 36.1774 41.195 36.2824 37.5987 36.2924C34.7962 36.3099 34.7962 40.6562 37.5987 40.6512"
                        fill="#A87C4F"
                      />
                      <path
                        d="M53.33 41.1699C56.7662 42.2587 59.9975 43.8187 63.1337 45.5912C63.69 44.2662 64.2487 42.9399 64.8075 41.6162C63.9212 41.3724 63.05 41.3299 62.1362 41.2374C61.165 41.1349 60.3062 41.9812 60.0375 42.8312C60.4337 41.5549 61.9262 41.6074 60.89 41.6374C60.335 41.6387 59.775 41.5812 59.2287 41.5324C58.2525 41.4399 57.2812 41.2712 56.3012 41.2374C54.3725 41.1687 53.4637 43.6424 54.7637 44.9499C55.7712 45.9662 56.8462 46.2649 58.2437 46.3324C61.0525 46.4812 61.0362 42.1324 58.2437 41.9837C58.1137 41.9449 57.975 41.9099 57.8425 41.8724C57.3275 43.1087 56.8187 44.3462 56.3037 45.5874C58.6875 45.6662 63.2337 47.1987 64.2337 43.9887C63.535 44.5237 62.8387 45.0549 62.1387 45.5874C62.6487 45.6162 63.155 45.6924 63.6562 45.8074C66.03 46.4612 67.4937 43.0562 65.3287 41.8312C61.8762 39.8787 58.275 38.1712 54.4887 36.9737C51.7987 36.1287 50.6612 40.3324 53.33 41.1699"
                        fill="#A87C4F"
                      />
                      <path
                        d="M65.5375 49.1998C65.0638 49.736 64.5688 50.2373 64.0213 50.696C64.155 50.6035 64.1138 50.6323 63.9 50.7885C63.7713 50.8798 63.6413 50.9648 63.51 51.0523C63.3754 51.1353 63.2387 51.2149 63.1 51.291C63.1363 51.266 62.4488 51.6123 62.7588 51.481C61.6663 51.9373 60.8975 52.9023 61.2375 54.1573C61.5225 55.1873 62.8188 56.136 63.9138 55.676C65.7625 54.9023 67.2838 53.7748 68.6188 52.2748C69.405 51.3885 69.4888 50.0723 68.6188 49.1985C67.8125 48.4023 66.3238 48.3135 65.5375 49.1985"
                        fill="#A87C4F"
                      />
                      <path
                        d="M19.9487 54.4111C21.1 54.4123 22.2412 54.5673 23.3862 54.7136C24.5662 54.8598 25.5587 53.6098 25.5587 52.5386C25.5587 51.2373 24.5612 50.5111 23.3862 50.3611C22.2412 50.2198 21.1 50.0736 19.9487 50.0623C18.7575 50.0523 17.7712 51.0623 17.7712 52.2411C17.7712 53.4336 18.7575 54.4011 19.9487 54.4111Z"
                        fill="#A87C4F"
                      />
                      <path
                        d="M29.1838 6.6037C22.57 9.6612 19.8088 15.2374 22.9088 21.4449C24.7588 25.1487 27.7 28.3387 30.0925 31.7687C33.145 36.1537 33.0863 40.1649 30.6613 44.7975C29.7163 46.5962 32.7338 48.1724 33.6838 46.3624C37.1113 39.8287 36.3863 34.6824 32.0625 28.7124C27.4175 22.2962 20.19 14.2537 30.9525 9.2812C32.9588 8.3537 31.185 5.6762 29.185 6.59995"
                        fill="#FB6602"
                      />
                      <path
                        d="M40.6563 49.9801C43.7688 46.5014 44.4813 42.9826 42.8925 38.7601C41.1525 34.1401 37.7175 30.3839 37.6613 25.3189C37.6125 21.1251 39.9588 17.0389 41.5913 13.1976C43.2663 9.25135 44.1038 5.30261 43.205 1.12011C42.7875 -0.841145 39.4175 -0.0111448 39.8263 1.94386C41.4325 9.48136 35.4875 16.0301 34.3413 23.2689C33.81 26.6401 34.535 29.9376 36.095 33.0239C38.5475 37.8701 42.6263 42.8139 38.1763 47.7876C36.7913 49.3389 39.2525 51.5376 40.6563 49.9776"
                        fill="#FB6602"
                      />
                      <path
                        d="M51.45 45.1627C51.4087 41.7564 50.9025 38.6439 49.6525 35.4202C49.065 33.9152 48.0637 32.5951 47.5187 31.0689C46.9712 29.5401 48.06 27.7302 48.8487 26.4564C51.4975 22.1889 54.2887 18.8426 51.4425 13.9864C50.3962 12.2089 47.3762 13.7776 48.4087 15.5476C51.1887 20.2839 45.3475 24.1189 44.1362 28.5489C43.5087 30.8314 44.415 32.8739 45.535 34.8976C47.345 38.1851 47.8962 41.5352 47.9375 45.1627C47.97 47.1614 51.475 47.1614 51.45 45.1627Z"
                        fill="#FB6602"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_21_35">
                        <rect width="80" height="80" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="ff_raleway fw_regular fs_base color_black mt-3">
                  Quality Food
                </h3>
                <p className="ff_raleway fw_regular fs_xsm color_55 mt-2 opacity-75">
                  At JeunKoyo, our customer’s satisfaction is our prority. Our
                  ingredients are freshly picked, refined and clean
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="text-center box_white">
                <div className="col_svg">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_21_60)">
                      <path
                        d="M40 80C62.055 80 80 62.055 80 40C80 17.945 62.055 0 40 0C17.945 0 0 17.945 0 40C0 62.055 17.945 80 40 80ZM40 2.5C60.6775 2.5 77.5 19.3225 77.5 40C77.5 60.6775 60.6775 77.5 40 77.5C19.3225 77.5 2.5 60.6775 2.5 40C2.5 19.3225 19.3225 2.5 40 2.5Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M50.1525 54.4201C50.2683 54.5371 50.4061 54.63 50.558 54.6934C50.7099 54.7568 50.8729 54.7894 51.0375 54.7894C51.2021 54.7894 51.3651 54.7568 51.517 54.6934C51.6689 54.63 51.8067 54.5371 51.9225 54.4201C52.1568 54.1857 52.2885 53.8678 52.2885 53.5364C52.2885 53.2049 52.1568 52.887 51.9225 52.6526L40 40.7326V23.2976C40 22.9661 39.8683 22.6481 39.6339 22.4137C39.3995 22.1793 39.0815 22.0476 38.75 22.0476C38.4185 22.0476 38.1005 22.1793 37.8661 22.4137C37.6317 22.6481 37.5 22.9661 37.5 23.2976V41.2501C37.5 41.5826 37.6325 41.9001 37.865 42.1351L50.1525 54.4201Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M10 42.5C11.3807 42.5 12.5 41.3807 12.5 40C12.5 38.6193 11.3807 37.5 10 37.5C8.61929 37.5 7.5 38.6193 7.5 40C7.5 41.3807 8.61929 42.5 10 42.5Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M68.5 39.5C69.0523 39.5 69.5 39.0523 69.5 38.5C69.5 37.9477 69.0523 37.5 68.5 37.5C67.9477 37.5 67.5 37.9477 67.5 38.5C67.5 39.0523 67.9477 39.5 68.5 39.5Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M38.5 9.5C39.0523 9.5 39.5 9.05228 39.5 8.5C39.5 7.94772 39.0523 7.5 38.5 7.5C37.9477 7.5 37.5 7.94772 37.5 8.5C37.5 9.05228 37.9477 9.5 38.5 9.5Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M40 72.5C41.3807 72.5 42.5 71.3807 42.5 70C42.5 68.6193 41.3807 67.5 40 67.5C38.6193 67.5 37.5 68.6193 37.5 70C37.5 71.3807 38.6193 72.5 40 72.5Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M18.5 19.5C19.0523 19.5 19.5 19.0523 19.5 18.5C19.5 17.9477 19.0523 17.5 18.5 17.5C17.9477 17.5 17.5 17.9477 17.5 18.5C17.5 19.0523 17.9477 19.5 18.5 19.5Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M58.5 59.5C59.0523 59.5 59.5 59.0523 59.5 58.5C59.5 57.9477 59.0523 57.5 58.5 57.5C57.9477 57.5 57.5 57.9477 57.5 58.5C57.5 59.0523 57.9477 59.5 58.5 59.5Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M61 19.5C61.5523 19.5 62 19.0523 62 18.5C62 17.9477 61.5523 17.5 61 17.5C60.4477 17.5 60 17.9477 60 18.5C60 19.0523 60.4477 19.5 61 19.5Z"
                        fill="#FB6602"
                      />
                      <path
                        d="M20 62.5C21.3807 62.5 22.5 61.3807 22.5 60C22.5 58.6193 21.3807 57.5 20 57.5C18.6193 57.5 17.5 58.6193 17.5 60C17.5 61.3807 18.6193 62.5 20 62.5Z"
                        fill="#FB6602"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_21_60">
                        <rect width="80" height="80" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="ff_raleway fw_regular fs_base color_black mt-3">
                  Opens Days
                </h3>
                <p className="ff_raleway fw_regular fs_xsm color_55 mt-2 opacity-75">
                  We stay opened 24/7 everyday. No retreat! No Surrender! A ma
                  si se everyday
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
