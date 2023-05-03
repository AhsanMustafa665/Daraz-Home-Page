import React from "react";
import "./MiniNav.css";
import { ImSearch } from "react-icons/im";
import { BsCart2 } from "react-icons/bs";

const MiniNav = () => {
  return (
    <div className="nav-items sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl block ddd">
      <h4>SAVE MORE ON APP</h4>
      <h4>DARAZ DONATES</h4>
      <h4 className="text-[#fa5d02]">SELL ON DARAZ</h4>
      <h4>CUSTOMER CARE</h4>
      <h4>TRACK MY ORDER</h4>
      <h4>SIGNUP / LOGIN</h4>
      <h4>DARAZ AFFILIATE PROGRAM</h4>
      <h4>ভাষা</h4>
      <nav class="bg-white fixed w-full z-20  left-0 mt-5 pt-5">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-[-28px]">
          <a
            href="https://www.daraz.com.bd/?spm=a2a0e.home.header.dhome.4b6912f7a6bVBh"
            class="flex items-center"
          >
            <img
              width={"170px"}
              src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png"
              className="h-12 mr-3 pl-6"
              alt="Daraz Logo"
            />
          </a>
          <div class="flex md:order-2">
            <button type="button" class="">
              <img
                src="https://icms-image.slatic.net/images/ims-web/d998019b-9b34-44be-b747-1e6d5a892e2c.png"
                alt=""
                width={"188px"}
                className="mr-5 mt-2"
              />
            </button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search in Daraz"
              className="bg-[#f5f5f5] w-[600px] h-10 mt-2 ml-[-80px] px-4 text-[15px] font-semibold border-0 focus:ring-[#f57224] focus:border-[#f57224]"
            />
            <button
              className="bg-[#f57224] lg:text-[16px] text-white pt-2 pb-[14px] px-3"
              type="button"
              id="button-addon2"
            >
              <ImSearch className="text-[19px]" />
            </button>
            <button>
              <BsCart2 className="text-[28px] ml-7 mb-[-10px]" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MiniNav;
