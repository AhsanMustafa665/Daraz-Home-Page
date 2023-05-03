import React, { useEffect, useState } from "react";
import You from "../You/You";
import "./JustYou.css";

const JustYou = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("justYou.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="px-20">
      <p className="text-gray-600 text-2xl mb-1">Just For You</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-6 pb-4 lg:gap-x-5 lg:gap-y-6 gap-x-20 gap-y-3">
        {products.map((you) => (
          <You key={you.id} you={you}></You>
        ))}
      </div>
      <button className="text-center text-[14px] font-semibold cen">
        LOAD MORE
      </button>
    </div>
  );
};

export default JustYou;
