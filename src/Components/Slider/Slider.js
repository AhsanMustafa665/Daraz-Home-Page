import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Slider = () => {
  return (
    <div className="bg-[#a9baa8] pr-9">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-16"
      >
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/0908edcc-75c3-45f4-a6f9-6751b4f7d48b.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/bfb8c4bd-28c6-486f-a37a-305b054b64cd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/1f5599ec-690d-4452-b523-e11885233ea7.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/2467b8d4-c94c-42d6-bfa8-588c3eba6858.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/7470e98e-5a80-4612-bfab-4fe8d94a30a1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/71c8081b-569c-4441-873f-d61dadb7da78.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/f841a43d-0c6d-44cd-b4ad-b20f9288d72d.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/be864785-8eb5-4991-aacf-ba2933005494.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://icms-image.slatic.net/images/ims-web/2a54a9f1-7a27-4eb7-b721-6ebb6a4a83b9.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
