import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";

const Payment = () => {
  return (
    <div className="px-20 pt-2 bg-white mb-9">
      <div className=" text-gray-700 text-[18px] font-semibold grid lg:grid-cols-4 md:grid-cols-2">
        <div className="w-60">
          <p className="my-3">Payment Methods</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            <img
              className="drop-shadow-md"
              src="https://lh3.googleusercontent.com/x83KTYypY1ba_kX38xa6fzQaTaEFMuSUgLw0aGQNf0X8GlVQLeBcRGeW1G9GRWhXiiLqa2_HhnC5KtA801xZg4NJ2xTKCFjoex-QcDiL"
              alt=""
            />
            <img
              className="drop-shadow-md"
              src="https://lh3.googleusercontent.com/cdQl3Z3D06qHYjTWPXOv-IEM2u6710LSLt3S28T-txqszZJ0eA7ToFy-_INLGTS7y2nAzKzODolQd-oddi7wZJRFnMM4nA_lib-WcQ4"
              alt=""
            />
            <img
              className="drop-shadow-md"
              src="https://lh3.googleusercontent.com/VMpQbBIsYYFLgP_MfZDhnHLcUG-VdrNQP1gCoHcEMvDV3GYDuNQsysSP1FeLEfPSh96J7McW0M6lPhkLaVf16--fwvld0Yp2DlE8zD9I"
              alt=""
            />
            <img
              className="drop-shadow-md"
              src="https://lh3.googleusercontent.com/cV2TdgByrHKp3KcCPnwgU6YLLElG2jnRyZmNRokWWgnW6PkJgrMA_hNiOYFSZ2qnoWQkGq4OZ2XSFLrZxdUpx4PLM4_URlmwgTnrsi8"
              alt=""
            />
            <img
              className="drop-shadow-md"
              src="https://lh3.googleusercontent.com/F7k4Ol7weZ-5NH_gN9qrNzXfqAvjWz7Z7AP98B93xj_15417sUXcljIAnfQl4xP42G2Ydkq3LNvFwd21Xz9Gi_K8yibQRMM8CXzl00A1qA"
              alt=""
            />
            <img
              className="drop-shadow-md"
              src="https://lh3.googleusercontent.com/Y9T-5d1KETAB7nDsMKhcz2AoCHw5zreWqhQClu3rhPuoBOWhjxgJ_IZOmu3aOVUjf_tt13L_971Mek958o_tOw1D3EIyLweOKnh7rGM"
              alt=""
            />
            <img
              className="drop-shadow-md"
              src="https://lh3.googleusercontent.com/lrHi4Hk2IJF2-REgrnyadZDKnH9XXq__dAma4I9K_Ioj-0xQ3fnE2ImpK5iBCzEZEAcJw4ndYsTBKKMbflYl-KBtHSXwMYrOhD7gzRgs"
              alt=""
            />
          </div>
        </div>
        <div className="w-60">
          <p className="my-3">Daraz International</p>
          <div className="flex flex-wrap gap-x-2">
            <a href="">
              <img
                className="w-8 h-8 rounded-full border border-gray-800"
                src="https://img.freepik.com/free-vector/illustration-pakistan-flag_53876-27123.jpg?size=626&ext=jpg&ga=GA1.1.804411465.1642952142&semt=robertav1_2_sidr"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-8 h-8 border border-gray-800 rounded-full"
                src="https://media.istockphoto.com/id/1453999824/vector/bangladesh-flag-button-on-white-background.jpg?s=612x612&w=0&k=20&c=i1knvVhMzLiaQqfjxIig44-Og1tZUe_rHVJhrkxD218="
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-8 h-8 rounded-full border border-gray-800"
                src="https://flagcdn.com/w320/lk.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-8 h-8 rounded-full border border-gray-800"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-8 h-8 rounded-full border border-gray-800"
                src="https://flagcdn.com/w320/bt.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div>
          <p className="my-3">Follow Us</p>
          <div className="flex flex-wrap gap-x-1">
            <a href="">
              <FaFacebookF className="text-blue-700 text-[33px] border-2 border-blue-700 pt-1 ps-1 pr-1 rounded-full" />
            </a>
            <a href="">
              <BsTwitter className="text-[#4dc8f2] text-[34px] border-2 border-[#4dc8f2] p-1 rounded-full" />
            </a>
            <a href="">
              <RiInstagramFill className="text-pink-600 text-[34px] border-2 border-pink-600 p-1 rounded-full" />
            </a>
            <a href="">
              <BsYoutube className="text-red-700 text-[34px] border-2 border-red-700 p-1 rounded-full" />
            </a>
            <a href="">
              <img
                src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4Ls-VBYcRgbCw7NyuOoCtw3WJUxJWqkHiGToQjXotwFOSE_ag"
                alt=""
                className="text-red-700 w-8 rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="w-60">
          <p className="my-3">Verified by</p>
          <img
            className="w-[150px] h-[100px]"
            src="https://i.ibb.co/y8YyS6R/sdfaasdfsadfsadf-removebg-preview-1.png"
            alt=""
          />
        </div>
        <footer className="py-7">© Daraz 2023</footer>
      </div>
    </div>
  );
};

export default Payment;
