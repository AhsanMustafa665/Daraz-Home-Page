import React from "react";

const Catagory = (props) => {
  const { img, name } = props.catagory;
  return (
    <div>
      <div
        style={{ lineHeight: "1" }}
        class=" bg-white border border-gray-200 hover:border hover:border-gray-200 rounded-sm lg:w-[152px] w-48 lg:h-[150px] hover:drop-shadow-lg"
      >
        <a href="#">
          <img className="px-5 pt-1 pb-2" src={img} alt="" />
        </a>
        <div>
          <a href="#">
            <p className="text-gray-700 lg:text-[14px] text-[11px] text-center font-[400]">
              {name}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
