import React from "react";

const FlashProduct = (props) => {
  const { img, name, afterPrice, beforePrice, price } = props.FlProduct;
  return (
    <div>
      <div
        style={{ lineHeight: "1" }}
        className="bg-white border border-white hover:border hover:border-gray-200 rounded-sm lg:p-2 p-3 hover:drop-shadow-md lg:w-[180px] w-36 lg:mt-0 mt-5"
      >
        <a href="#">
          <img className="lg:w-[180px] w-20" src={img} alt="" />
        </a>
        <div>
          <a href="#">
            <p className="lg:text-[13px] text-[9px] font-[500]">
              {name.slice(0, 47) + "..."}
            </p>
          </a>
          <p className="text-[#f85606] lg:text-xl text-[12px]">
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
