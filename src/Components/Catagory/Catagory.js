import React from "react";

const Catagory = (props) => {
  const { img, name } = props.catagory;
  return (
    <div>
      <div
        style={{ lineHeight: "1" }}
        class=" bg-white border border-gray-200 hover:border hover:border-gray-200 rounded-sm p-2 w-[152px] h-[150px] hover:drop-shadow-lg"
      >
        <a href="#">
          <img className="px-5 pt-1 pb-2 " src={img} alt="" />
        </a>
        <div>
          <a href="#">
            <p className="text-gray-700 text-[14px] text-center font-[400]">
              {name}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
