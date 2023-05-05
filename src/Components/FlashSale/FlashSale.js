import React, { useEffect, useState } from "react";
import FlashProduct from "../FlashProduct/FlashProduct";
import "./FlashSale.css";

const FlashSale = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("FlashProduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="lg:px-20 px-10">
      <h1 className="text-gray-600 lg:text-2xl text-xl mb-3">FlashSale</h1>
      <div className="bg-white block lg:flex justify-between items-center shadow-sm mb-4 sss">
        <div className="flex items-center">
          <p className="text-[#f57224] font-semibold text-[14px] px-4 lg:mb-0 mb-5">
            On Sale Now
          </p>
          <p className="ml-24 mr-4 items-center">Ending in</p>
          <p className="bg-[#f57224] text-[17px] text-white p-2">00</p>
          <p className="bg-[#f57224] text-[17px] text-white p-2 mx-3">00</p>
          <p className="bg-[#f57224] text-[17px] text-white p-2">00</p>
        </div>
        <a
          href=""
          className="border border-[#f57224] text-[#f57224] p-2 m-4 text-[14px]"
        >
          SHOP MORE
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-6 mt-[-14px] lg:bg-white bg-[#f5f5f5] mb-6 pb-4">
        {products.map((FlProduct) => (
          <FlashProduct key={FlProduct.id} FlProduct={FlProduct}></FlashProduct>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
