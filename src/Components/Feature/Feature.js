import React from "react";
import "./Feature.css";
const Feature = () => {
  return (
    <div className="mt-10 text-center">
      <img
        className="center px-4"
        src="https://scontent.fcgp13-1.fna.fbcdn.net/v/t39.30808-6/342364146_250839930751837_7160843498781247350_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGZdComxjpvcrYUTxoswR9RrWwJIuz1RlatbAki7PVGVo7hH9SPeAAxOpIObVWaguT5UYZRhcHl7NaMR0wJs-EX&_nc_ohc=rNjFj7hvmIQAX_yQZ3R&_nc_ht=scontent.fcgp13-1.fna&oh=00_AfATq3NYOtzUqFzMQmOi8FIlNR_IA6Hnc9spWS2n95gzHw&oe=644DF635"
        alt=""
      />
      <button className="bg-[#420039] text-white px-7 py-1 mt-[-40px] text-xl rounded-full two ">
        Shop Now
      </button>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 pr-24 pl-16 mt-6 mb-5 lg:ml-0 ml-16">
        <a
          href=""
          className="flex items-center bg-[#f0efef] w-60 rounded-full hover:shadow-md"
        >
          <img
            className="pl-2 py-1"
            width={"40px"}
            src="https://icms-image.slatic.net/images/ims-web/3e2b2cf1-e997-4781-acda-b565808f4952.png"
            alt=""
          />
          <h1 className="font-semibold text-[17px] ml-2 hover:text-purple-500">
            Free Delivery{" "}
          </h1>
        </a>
        <a
          href=""
          className="flex items-center bg-[#f0efef] w-60 rounded-full hover:shadow-md"
        >
          <img
            className="pl-2 py-1"
            width={"40px"}
            src="https://icms-image.slatic.net/images/ims-web/55bc15b0-8b55-4165-b5d7-1b7ea6d15a5b.png"
            alt=""
          />
          <h1 className="font-semibold text-[17px] ml-2 hover:text-purple-500">
            Mart{" "}
          </h1>
        </a>
        <a
          href=""
          className="flex items-center bg-[#f0efef] w-60 rounded-full hover:shadow-md"
        >
          <img
            className="pl-2 py-1"
            width={"40px"}
            src="https://icms-image.slatic.net/images/ims-web/02fc3cf9-ceb3-443a-8052-5dabc2084078.png"
            alt=""
          />
          <h1 className="font-semibold text-[17px] ml-2 hover:text-purple-500">
            Men's Fashion{" "}
          </h1>
        </a>
        <a
          href=""
          className="flex items-center bg-[#f0efef] w-60 rounded-full hover:shadow-md"
        >
          <img
            className="pl-2 py-1"
            width={"40px"}
            src="https://icms-image.slatic.net/images/ims-web/ed607409-24de-4772-87d7-93ef9f5c4277.png"
            alt=""
          />
          <h1 className="font-semibold text-[17px] ml-2 hover:text-purple-500">
            Women's Fashion{" "}
          </h1>
        </a>
        <a
          href=""
          className="flex items-center bg-[#f0efef] w-60 rounded-full hover:shadow-md"
        >
          <img
            className="pl-2 py-1"
            width={"40px"}
            src="https://icms-image.slatic.net/images/ims-web/effb6b0f-56fb-4da7-8996-2bd38061390f.png"
            alt=""
          />
          <h1 className="font-semibold text-[17px] ml-2 hover:text-purple-500">
            Beauty & Glamour{" "}
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Feature;
