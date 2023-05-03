import React from "react";

const FlashProduct = (props) => {
  const { img, name, afterPrice, beforePrice, price } = props.FlProduct;
  return (
    <div>
      <div
        style={{ lineHeight: "1" }}
        className="bg-white border border-white hover:border hover:border-gray-200 rounded-sm p-2  hover:drop-shadow-md lg:w-[180px] w-52 lg:mt-0 mt-10 lg:ml-0 ml-16"
      >
        <a href="#">
          <img className="lg:w-[180px] w-32" src={img} alt="" />
        </a>
        <div>
          <a href="#">
            <p className="text-[13px] font-[500]">
              {name.slice(0, 47) + "..."}
            </p>
          </a>
          <p className="text-[#f85606] text-xl">
            <span className="text-2xl font-bold">৳</span>
            {price}
          </p>
          <div className="pb-3">
            <small className="text-gray-500">
              <s>
                <span>৳</span>
                {beforePrice}
              </s>
            </small>
            <small className="ms-1">-{afterPrice}%</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashProduct;
