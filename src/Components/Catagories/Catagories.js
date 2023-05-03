import React, { useEffect, useState } from "react";
import Catagory from "../Catagory/Catagory";

const Catagories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Catagories.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="px-20">
      <p className="text-gray-600 text-2xl pt-7 mb-1">Categories</p>{" "}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-6 pb-4">
        {products.map((catagory) => (
          <Catagory key={catagory.id} catagory={catagory}></Catagory>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
