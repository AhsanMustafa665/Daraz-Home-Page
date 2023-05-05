import React from "react";
import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 20,
  value: 2.5,
  edit: false,
};
const You = (props) => {
  const { img, name, price, beforePrice, afterPrice, ratings } = props.you;
  return (
    <div>
      <div
        style={{ lineHeight: "1" }}
        className=" bg-white border border-white hover:border hover:border-gray-200 rounded-sm hover:drop-shadow-sm lg:w-[190px] w-36 lg:h-[330px]"
      >
        <div className="px-2">
          <a href="#">
            <img className="lg:w-96 w-28 sm:p-3" src={img} alt="" />
          </a>
          <div>
            <a href="#">
              <p className="lg:text-[13px] text-[9px] text-gray-700 font-[500] uppercase pt-6">
                {name.slice(0, 47) + "..."}
              </p>
            </a>
            <div className=" leading-3 mt-4">
              <p className="text-[#f85606] text-xl">
                <span className="lg:text-2xl font-bold">৳</span>
                {price}
              </p>
              <div className="pb-3 text-gray-500">
                <small>
                  <s>
                    <span>৳</span>
                    {beforePrice}
                  </s>
                </small>
                <small className="ms-1 text-gray-500">-{afterPrice}%</small>
              </div>
              <div className="mt-[-9px] flex">
                <ReactStars {...firstExample} />
                <small className="text-gray-500">{ratings}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default You;
