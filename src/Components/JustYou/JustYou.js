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
      <p className="text-gray-600 lg:text-2xl text-xl mb-1">Just For You</p>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 mb-6 pb-4 lg:gap-x-5 lg:gap-y-6 gap-x-20 gap-y-5">
        {products.map((you) => (
          <You key={you.id} you={you}></You>
        ))}
      </div>
      <button className="text-[14px] font-semibold cen">LOAD MORE</button>
    </div>
  );
};

export default JustYou;
