import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import "./Footer.css";
import Swal from "sweetalert2";
const Footer = () => {
  const { value: text } = Swal.fire({
    input: "textarea",
    inputLabel: "Message",
    inputPlaceholder: "Type your message here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
  });
  if (text) {
    Swal.fire(text);
  }
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-16 overflow-hidden px-20 ">
        <div>
          <p className="text-gray-700 font-[500]">
            Online Shopping In Sri Lanka with Free Home Delivery – Daraz.lk{" "}
            <br /> <br />
          </p>
          <div className="leading-5">
            <small className="text-gray-500">
              What was the last time you had an exciting and rewarding online
              shopping experience? Can’t remember! How about we make it even
              more convenient, fast and affordable to fulfill all your buying
              needs? With Sri Lanka's biggest online shopping store, you can
              choose from hundreds and thousands of endless and ageless
              collections of chicest and stylish products. Online shopping at
              Daraz Sri Lanka offers you easy and convenient platform to order
              your most desired products with comfort of your home. Being the
              largest online shopping site in Sri Lanka, Daraz is home to
              endless products featured in consumer electronics, home
              appliances, fashion and everything in between. Daraz is a global
              online marketplace with ecommerce stores in Sri Lanka,{" "}
              <a href="" className="hover:underline text-gray-500">
                Pakistan
              </a>
              ,{" "}
              <a href="" className="hover:underline text-gray-500">
                Bangladesh
              </a>
              ,{" "}
              <a href="" className="hover:underline text-gray-500">
                Nepal
              </a>{" "}
              and{" "}
              <a href="" className="hover:underline text-gray-500">
                Myanmar
              </a>
              . <br /> <br />
              Experience online shopping in Sri Lanka with Daraz.lk by
              purchasing genuine quality products showcased by verified sellers
              across the country that will ensure safe and swift deliveries of
              your orders.
            </small>
          </div>
        </div>
        <div>
          <div>
            <div className="leading-5">
              <small className="text-gray-500">
                Our supply and logistic service will ensure on-time delivery of
                your orders in Colombo, Dehiwala-Mount Lavinia, Moratuwa,
                Jaffna, Negombo, Pita Kotte, Sri Jayewardenepura Kotte, Kandy,
                Trincomalee and within all major cities in Sri Lanka. <br />
                <br />
              </small>
            </div>
            <p className="text-gray-700 font-[500]">
              Looking For Exclusive Discount while Shopping online in Sri Lanka?{" "}
              <br /> <br />
            </p>
            <div className="leading-5">
              <small className="text-gray-500">
                Enhance Your Online Shopping Experience in Sri Lanka by having
                everything Daraz.lk offers at the palm of your hands, whether
                you’re sporting an iOS or Android gadget, download the{" "}
                <a href="" className="hover:underline text-gray-500">
                  daraz app
                </a>{" "}
                to get your orders with free delivery. <br />
                <br />
              </small>
            </div>
            <p className="text-gray-700 font-[500]">TRENDING </p>

            <div className="leading-5">
              <small>
                <a href="" className="hover:underline text-gray-500">
                  Bmw I8
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  Suzuki Swift
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  KTM Bike
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  Pantry Cupboard
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  Crew Cab
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  Cocker Spaniel
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  1 KG Cashew Nut
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  1 KG Flour
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  1 KG Rice Cooker
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  1 KG Tea
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  1000W Amplifier
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  1000W Inverter
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  100W Led Flashlight
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  1044 Wire
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  12V 7AH Battery
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  12V 9AH Battery
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  12V Battery
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  12V DC To 230V AC Inverter
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  12V Exide Battery
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  15 Inch Speaker
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  15W40 Engine Oil
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  18 Carat Gold
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  18 Inch Speaker
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  18650 Battery
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  1KG Cake
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  1TB Hard
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  2 By 2 Rubik's Cube
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  200 Pages CR Book
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  200W Amplifier Board
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  200W Amplifier
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  22K Gold Ring
                </a>{" "}
                ,
                <a href="" className="hover:underline text-gray-500">
                  18650 Battery
                </a>
              </small>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-700 font-[500]">Top Categories & Brands</p>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              MOBILE PHONES IN SRI LANKA
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Apple Phone Price in Sri Lanka
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Samsung Phone Price in Sri Lanka
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Huawei Phones
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                One Plus Phones
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Xiaomi Phones
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Vivo Phones
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Google Phones
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Nokia Phones
                <br />
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              LAPTOPS IN SRI LANKA
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Apple Laptop Price in Sri Lanka
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Dell Laptop Price
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                HP Laptop Price
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Asus Laptop Price
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Lenovo Laptops
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Acer Laptops
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              MENS FASHION
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Watch Price in Sri Lanka
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Mens Shoes
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Perfume for Men
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                T-Shirt for Men
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Mens Jewellery
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Sunglasses Sri Lanka
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              WOMENS FASHION
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Party Sarees in Sri Lanka
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Sri Lanka Clothes
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Ladies Shoes
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Cosmetics
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Party Frocks in Sri Lanka
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              HOME APPLIANCES
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Washing Machine Price
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Refrigerator Price
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Microwave Oven Price
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Oven Price in Sri Lanka
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Generators
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Fans
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Air Conditioners
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Tv Price in Sri Lanka
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Portable Air Conditioners
              </a>
              ,
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              ELECTRONICS
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Speakers
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Portable Speakers
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Smart Watches
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Power Bank Price in Sri Lanka
              </a>
            </small>
          </div>
        </div>
        <div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              STORAGE DEVICES
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Pen Drive Price
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                External Hard Disk
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Memory Card Price
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              WIRELESS DEVICES
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Bluetooth Price
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Airpods in Sri Lanka
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                {" "}
                Emergency Light Sri Lanka
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              ONLINE GROCERY SHOPPING
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Breakfast Items, Baby Care Items
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Beauty & Personal Care Products
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              CAMERAS
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Digital Camera
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                CCTV Camera
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Car Camera
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              SKIN CARE SRI LANKA
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Facia Night Cream
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Jovees Face Wash
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Whitening Cream
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Body Whitening Cream
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              BATTERIES
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Laptop Battery
              </a>
              <a href="" className="hover:underline text-gray-500">
                Battery Chargers
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              PHONE ACCESSORIES
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Samsung Wireless Charger
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Phone Cover
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                iPhone Charger
              </a>
            </small>
          </div>
          <p className="text-[12px] mt-2">
            <a href="" className="hover:underline">
              SHOP WORLDWIDE WITH LAZADA
            </a>
          </p>
          <div className="leading-5">
            <small>
              <a href="" className="hover:underline text-gray-500">
                Singapore
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Malaysia
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Philipines
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Indonesia
              </a>
              ,
              <a href="" className="hover:underline text-gray-500">
                Vietnam
              </a>
              ,
              <br />
              <a href="" className="hover:underline text-gray-500">
                Thailand
              </a>
            </small>
          </div>
        </div>
      </div>
      <button className="bg-white drop-shadow-lg border border-gray-400 lg:w-40 w-24 lg:px-8 px-4 element one py-2 rounded-full flex lg:ml-[1150px] ml-96 mb-3 sticky bottom-1 :bg-red-500">
        <p className="lg:text-xl text-xs font-semibold text-[#0D7FA2]">
          <RiMessage2Fill className="text-2xl" /> Messages
        </p>
      </button>
    </>
  );
};

export default Footer;
