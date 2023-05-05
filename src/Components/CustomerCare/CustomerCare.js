import React from "react";
import "./CustomerCare.css";

const CustomerCare = () => {
  return (
    <div className="bg-[#2e2e54] text-white px-20 pb-7 customer-care-menu">
      <div className="flex">
        <div>
          <p className="text-[18px] font-[500] mt-5 mb-2">Customer Care</p>
          <div className="leading-4">
            <a className="text-[13px] hover:underline" href="">
              Help Center
            </a>
            <br />
            <a className="text-[13px]  hover:underline" href="">
              How to Buy
            </a>{" "}
            <br />
            <a className="text-[13px] hover:underline" href="">
              Returns & Refunds
            </a>{" "}
            <br />
            <a className="text-[13px] hover:underline" href="">
              Contact Us
            </a>{" "}
            <br />
            <a className="text-[13px] hover:underline" href="">
              Terms & Conditions
            </a>{" "}
            <br />
            <a className="text-[13px] hover:underline" href="">
              CCMS - Central Complain Management System
            </a>
            <div>
              <p className="text-[18px] font-[500] mt-6 mb-2">
                Earn With Daraz
              </p>
              <a className="text-[13px] hover:underline" href="">
                Daraz University
              </a>
              <br />
              <a className="text-[13px]  hover:underline" href="">
                Sell on Daraz
              </a>{" "}
              <br />
              <a className="text-[13px] hover:underline" href="">
                Code of Conduct
              </a>{" "}
              <br />
              <a className="text-[13px] hover:underline" href="">
                Join the Daraz Affiliate Program
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="leading-4 ms-12">
          <p className="text-[18px] font-[500] mt-5 mb-2">Daraz</p>
          <a className="text-[13px] hover:underline" href="">
            About Daraz
          </a>
          <br />
          <a className="text-[13px]  hover:underline" href="">
            Digital Payments
          </a>{" "}
          <br />
          <a className="text-[13px] hover:underline" href="">
            Daraz Blog
          </a>{" "}
          <br />
          <a className="text-[13px] hover:underline" href="">
            Daraz Cares
          </a>{" "}
          <br />
          <a className="text-[13px] hover:underline" href="">
            Daraz Mart
          </a>
          <br />
          <a className="text-[13px]  hover:underline" href="">
            Privacy Policy
          </a>{" "}
          <br />
          <a className="text-[13px] hover:underline" href="">
            Daraz App
          </a>{" "}
          <br />
          <a className="text-[13px] hover:underline" href="">
            Daraz Exclusives
          </a>{" "}
          <br />
          <a className="text-[13px] hover:underline" href="">
            Hungrynaki Food Delivery
          </a>{" "}
          <br />
          <a className="text-[13px] hover:underline" href="">
            Daraz Donates
          </a>{" "}
          <br />
          <a className="text-[13px] hover:underline" href="">
            Daraz BPL Live
          </a>{" "}
        </div>
        <div className="mt-6 ms-44 p-2 ">
          <div className="flex">
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1nvAvXMFY.1VjSZFnXXcFHXXa.png"
              width={"25%"}
              className="rounded-lg "
              alt=""
            />
            <div className=" ms-5 leading-4">
              <img
                src="https://icms-image.slatic.net/images/ims-web/5db39a81-a04b-4f58-871e-9b9f6d044d25.png"
                className="h-12 w-12 mt-9 p-1"
                alt=""
              />
              <p className="text-[#f85606] text-[14px] font-semibold">
                Happy Shopping
              </p>
              <p className="text-[14px] font-semibold">Download App</p>
            </div>
          </div>
          <div className="flex mt-5">
            {" "}
            <img
              src="https://lh3.googleusercontent.com/Cbatv-b0GmodkRTLJ71bcV_k_QF3JabI8znj6QavilaJSCZeh_7YktoATGEg-6MfDfAfYoFjg4j1wMEGOkV3yVpcYfVoZdAPzLKli_8k"
              className="h-10"
              alt=""
            />
            <img
              src="https://lh3.googleusercontent.com/ehd6g0rRlTfGIfbAE0_Z2cOxXoK0mT5gaTniShSn1SeK9qs4R7RwOnY6XAJ-AeazgNGt_jCoAYfY4QOQhfqlElW2keKCU3W2xZPuXxhSdA"
              className="h-9"
              alt=""
            />
            <img
              src="https://lh3.googleusercontent.com/aaQHvzHkVpKx2Ny32jLsYJ_cQogyx9-JIqbcbAvwREe9firrnyhXw_5pnnuCIVWQmskEQ-v8R979XCi3ON15nXZ4K4ykrU0AT6uTE_vq"
              className="h-11"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
