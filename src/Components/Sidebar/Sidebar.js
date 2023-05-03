import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav>
      <ul className="text-[14px] leading-[30px] text-gray-800 bg-slate-100 w-[176px] fff pl-2 py-1 ml-10 mt-[-378px] pt-3 pb-[6px] shadow-md">
        {/* 1st dropdown */}
        <li className="hover:text-purple-600 hover:bg-purple-100 pl-1 ml-[-8px] lg:mt-0 mt-[-20px]">
          Women's & Girls' Fashion <p className="pr-[1px] hidden">></p>
          <ul className="dropdown shadow-md px-2 pt-3 h-[378px]">
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Traditional Wear <p className="inline pl-2 hidden">></p>
              <ul className="shadow-md p-3 dropdown2 h-[378px] ">
                <li className="text-gray-800">Shalowar Kameez</li>
                <li className="text-gray-800">Sarees</li>
                <li className="text-gray-800">Kurties</li>
                <li className="text-gray-800">Unstriched Fabric</li>
                <li className="text-gray-800">Party Kameez and Growns</li>
                <li className="text-gray-800">Palazzo Pants and Culuttos</li>
                <li className="text-gray-800">Pants Palazzo and Cap</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px] ">
              Muslim Wear <p className="inline pl-2 hidden ">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-72px" }}
              >
                <li className="text-gray-800">Abayas & Long Dresses</li>
                <li className="text-gray-800">Hijabs</li>
                <li className="text-gray-800">Brooches</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Western Wear <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-102px" }}
              >
                <li className="text-gray-800">Dresses</li>
                <li className="text-gray-800">Tunics</li>
                <li className="text-gray-800">T-Shirts</li>
                <li className="text-gray-800">Tops</li>
                <li className="text-gray-800">Skirts</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Innerwear <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px]"
                style={{ marginTop: "-132px" }}
              >
                <li className="text-gray-800">Bras</li>
                <li className="text-gray-800">Lingerie Sets</li>
                <li className="text-gray-800">Panties</li>
                <li className="text-gray-800">Robes & Bodysuits</li>
                <li className="text-gray-800">Sleep & Loungewear</li>
                <li className="text-gray-800">Tank Tops</li>
                <li className="text-gray-800">Shapewear</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Shoes <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px]"
                style={{ marginTop: "-162px" }}
              >
                <li className="text-gray-800">Heels</li>
                <li className="text-gray-800">Flats</li>
                <li className="text-gray-800">Sneakers</li>
                <li className="text-gray-800">Pump Shoes</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Bags<p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px]"
                style={{ marginTop: "-192px" }}
              >
                <li className="text-gray-800">Crossbody & Shoulder Bags</li>
                <li className="text-gray-800">Backpacks</li>
                <li className="text-gray-800">Wallets</li>
                <li className="text-gray-800">Top Handle Bags</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Innerwear <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px]"
                style={{ marginTop: "-222px" }}
              >
                <li className="text-gray-800">Casual</li>
                <li className="text-gray-800">Fashion</li>
                <li className="text-gray-800">Business</li>
                <li className="text-gray-800">Sports</li>
                <li className="text-gray-800">Accessories</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="hover:text-purple-600 hover:bg-purple-100 pl-1 ml-[-8px]">
          Health & Beauty <p className="pr-[1px] hidden">></p>
          <ul className="dropdown topCls shadow-md px-2 pt-3 h-[378px]">
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Skin Care<p className="inline pl-2 hidden">></p>
              <ul className="shadow-md p-3 dropdown2 h-[378px] ">
                <li className="text-gray-800">Face Mask and Packs</li>
                <li className="text-gray-800">Face Wash and Cleansers</li>
                <li className="text-gray-800">Toner & Mists</li>
                <li className="text-gray-800">Serum & Essence</li>
                <li className="text-gray-800">Moisturizers and Cream</li>
                <li className="text-gray-800">Sunscreen and Aftersun</li>
                <li className="text-gray-800">Lip Balm and Treatment</li>
                <li className="text-gray-800">Night Cream</li>
                <li className="text-gray-800">Laikou</li>
                <li className="text-gray-800">Bioaqua</li>
                <li className="text-gray-800">Mamaearth</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Hair Care
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-72px" }}
              >
                <li className="text-gray-800">Hair Oils</li>
                <li className="text-gray-800">Hair Treatments</li>
                <li className="text-gray-800">Hair Coloring</li>
                <li className="text-gray-800">Shampoo</li>
                <li className="text-gray-800">Conditioner</li>
                <li className="text-gray-800">Hair Care Accessories</li>
                <li className="text-gray-800">Wow Skin Science</li>
                <li className="text-gray-800">Sunsilk</li>
                <li className="text-gray-800">Ribana</li>
                <li className="text-gray-800">Parachute</li>
                <li className="text-gray-800">Tresemme</li>
                <li className="text-gray-800">Dove</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Makeup
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-102px" }}
              >
                <li className="text-gray-800">Face</li>
                <li className="text-gray-800">Eyes</li>
                <li className="text-gray-800">Lips</li>
                <li className="text-gray-800">Nails</li>
                <li className="text-gray-800">Makeup Palettes & Sets</li>
                <li className="text-gray-800">Makeup Accessories</li>
                <li className="text-gray-800">Makeup Removers</li>
                <li className="text-gray-800">M.A.C</li>
                <li className="text-gray-800">Maybelline</li>
                <li className="text-gray-800">Makeup Revolution</li>
                <li className="text-gray-800">Fenty Beauty</li>
                <li className="text-gray-800">Morphe</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Fragances
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-132px" }}
              >
                <li className="text-gray-800">Women's Perfume</li>
                <li className="text-gray-800">Women's Body Spray</li>
                <li className="text-gray-800">Roll-on & Deo</li>
                <li className="text-gray-800">Men's Perfume</li>
                <li className="text-gray-800">Men's Body Spray</li>
                <li className="text-gray-800">Attar</li>
                <li className="text-gray-800">My Perfumes</li>
                <li className="text-gray-800">Al Haramain</li>
                <li className="text-gray-800">Aris</li>
                <li className="text-gray-800">Hugo Boss</li>
                <li className="text-gray-800">Calvin Klein</li>
                <li className="text-gray-800">Versace</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Bath & Body
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-162px" }}
              >
                <li className="text-gray-800">Body & Massage Oils</li>
                <li className="text-gray-800">Body Scrubs</li>
                <li className="text-gray-800">Soaps & Body Wash</li>
                <li className="text-gray-800">Hair Removal</li>
                <li className="text-gray-800">Talcum Powder</li>
                <li className="text-gray-800">Hand Care</li>
                <li className="text-gray-800">Bath & Body Accessories</li>
                <li className="text-gray-800">Dettol</li>
                <li className="text-gray-800">The Body Shop</li>
                <li className="text-gray-800">Godrej NO 1</li>
                <li className="text-gray-800">Lux</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Personal Care
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-192px" }}
              >
                <li className="text-gray-800">Toothpaste</li>
                <li className="text-gray-800">Toothbrush</li>
                <li className="text-gray-800">Electric Toothbrush</li>
                <li className="text-gray-800">Dental Floss</li>
                <li className="text-gray-800">Mouthwash</li>
                <li className="text-gray-800">Teeth Whitening</li>
                <li className="text-gray-800">Sanitary Napkins</li>
                <li className="text-gray-800">Ear Care</li>
                <li className="text-gray-800">Contact Lens</li>
                <li className="text-gray-800">Freedom</li>
                <li className="text-gray-800">Senora</li>
                <li className="text-gray-800">Whisper</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Men's Care
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-222px" }}
              >
                <li className="text-gray-800">Shaving & Grooming</li>
                <li className="text-gray-800">Body and Skin Care</li>
                <li className="text-gray-800">Hair Care</li>
                <li className="text-gray-800">Aftershave & Foam</li>
                <li className="text-gray-800">Men's Perfume</li>
                <li className="text-gray-800">Men's Body Spray</li>
                <li className="text-gray-800">Sports Nutrition</li>
                <li className="text-gray-800">Beardo</li>
                <li className="text-gray-800">Nivea</li>
                <li className="text-gray-800">Gillette</li>
                <li className="text-gray-800">Muuchstac</li>
                <li className="text-gray-800">Urban Gabru</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Sexual Wallness
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Condoms</li>
                <li className="text-gray-800">Lubricants</li>
                <li className="text-gray-800">Durex</li>
                <li className="text-gray-800">Coral</li>
                <li className="text-gray-800">Sensation</li>
                <li className="text-gray-800">Manforce</li>
                <li className="text-gray-800">Grip Unlimited</li>
                <li className="text-gray-800">Panther</li>
                <li className="text-gray-800">Skore</li>
                <li className="text-gray-800">Nottyboy</li>
                <li className="text-gray-800">Kamasutra</li>
                <li className="text-gray-800">Romantic</li>
              </ul>
            </li>
          </ul>
        </li>
        {/* 3rd dropdown */}
        <li className="hover:text-purple-600 hover:bg-purple-100 pl-1 ml-[-8px]">
          Watches, Bags, Jewellery <p className="pr-[1px] hidden">></p>
          <ul className="dropdown topCls d shadow-md px-2 pt-3 h-[378px]">
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 px-2 ml-[-13px]">
              Kids Bags<p className="inline hidden">></p>
              <ul className="shadow-md p-3 dropdown2 h-[378px] ">
                <li className="text-gray-800">Backpacks</li>
                <li className="text-gray-800">Bags</li>
                <li className="text-gray-800">School Bags & Backpack</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Laptop Bags & Cases
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-72px" }}
              >
                <li className="text-gray-800">Backpacks</li>
                <li className="text-gray-800">Briefcases</li>
                <li className="text-gray-800">Laptop cases</li>
                <li className="text-gray-800">Shoulder & Messenger Bags</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Luggage
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-102px" }}
              >
                <li className="text-gray-800">Carry-Ons</li>
                <li className="text-gray-800">Kids Luggage</li>
                <li className="text-gray-800">Luggage Sets</li>
                <li className="text-gray-800">Suitcases</li>
                <li className="text-gray-800">Travel Duffels</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Travel Bags
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-132px" }}
              >
                <li className="text-gray-800">Waist Packs </li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Men's Bags
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-162px" }}
              >
                <li className="text-gray-800">Backpacks</li>
                <li className="text-gray-800">Business Bags</li>
                <li className="text-gray-800">Crossbody Bags</li>
                <li className="text-gray-800">Messenger Bags</li>
                <li className="text-gray-800">Tote Bags</li>
                <li className="text-gray-800">Wallets & Accessories</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Women's Bags
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-192px" }}
              >
                <li className="text-gray-800">Backpacks</li>
                <li className="text-gray-800">Cross Body & Shoulder Bags</li>
                <li className="text-gray-800">Bag Charms & Accessories</li>
                <li className="text-gray-800">Clutches</li>
                <li className="text-gray-800">Top-Handle Bags</li>
                <li className="text-gray-800">Tote Bags</li>
                <li className="text-gray-800">Wallets</li>
                <li className="text-gray-800">Wristlets</li>
              </ul>
            </li>

            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Kids Watches
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Boys</li>
                <li className="text-gray-800">Girls</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Women's Jewellery
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Nose Pin & Body Piercings</li>
                <li className="text-gray-800">Bracelets</li>
                <li className="text-gray-800">Necklaces</li>
                <li className="text-gray-800">Earrings</li>
                <li className="text-gray-800">Rings</li>
                <li className="text-gray-800">Jewellery Storage</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Men's Jewellery
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Bracelets</li>
                <li className="text-gray-800">Earrings</li>
                <li className="text-gray-800">Necklaces</li>
                <li className="text-gray-800">Pendants</li>
                <li className="text-gray-800">Rings</li>
                <li className="text-gray-800">Tie clips</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Sunglasses
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Men's Sunglasses</li>
                <li className="text-gray-800">Women's Sunglasses</li>
              </ul>
            </li>
          </ul>
        </li>
        {/* 4th dropdown */}
        <li className="hover:text-purple-600 hover:bg-purple-100 pl-1 ml-[-8px]">
          Men's & Boys' Fashion<p className="pr-[1px] hidden">></p>
          <ul className="dropdown topCls d shadow-md px-2 pt-3 h-[378px] d2">
            <li className="text-gray-800 hover:text-purple-600  hover:bg-purple-100 px-2 ml-[-13px]">
              Clothing<p className="inline hidden">></p>
              <ul className="shadow-md p-3 dropdown2 h-[378px] ">
                <li className="text-gray-800">T-Shirts</li>
                <li className="text-gray-800">Jeans</li>
                <li className="text-gray-800">Casual Shirts</li>
                <li className="text-gray-800">Kurtas</li>
                <li className="text-gray-800">Polo Shirts</li>
                <li className="text-gray-800">Socks</li>
                <li className="text-gray-800">Rain Coats & Trenches</li>
                <li className="text-gray-800">Joggers & Sweats</li>
                <li className="text-gray-800">Chinos</li>
                <li className="text-gray-800">Trunks & Boxers</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Shoes
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-72px" }}
              >
                <li className="text-gray-800">Sneakers</li>
                <li className="text-gray-800">Slip-Ons & Loafers</li>
                <li className="text-gray-800">Flip Flops</li>
                <li className="text-gray-800">Formal Shoes</li>
                <li className="text-gray-800">Sandals</li>
                <li className="text-gray-800">Rain Boots</li>
                <li className="text-gray-800">Shoes Accessories</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Muslim Wear
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-102px" }}
              >
                <li className="text-gray-800">Batik Shirts</li>
                <li className="text-gray-800">Jubbahs</li>
                <li className="text-gray-800">Muslimin Shirts</li>
                <li className="text-gray-800">Accessories</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Accessories
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-132px" }}
              >
                <li className="text-gray-800">Belts </li>
                <li className="text-gray-800">Bow Ties </li>
                <li className="text-gray-800">Cufflinks </li>
                <li className="text-gray-800">Hats & Caps </li>
                <li className="text-gray-800">Ties </li>
                <li className="text-gray-800">Umbrellas </li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Bags
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-162px" }}
              >
                <li className="text-gray-800">Backpacks</li>
                <li className="text-gray-800">Business Bags</li>
                <li className="text-gray-800">Crossbody Bags</li>
                <li className="text-gray-800">Messenger Bags</li>
                <li className="text-gray-800">Tote Bags</li>
                <li className="text-gray-800">Wallets & Accessories</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Watches
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-192px" }}
              >
                <li className="text-gray-800">Accessories</li>
                <li className="text-gray-800">Business</li>
                <li className="text-gray-800">Casual</li>
                <li className="text-gray-800">Fashion</li>
                <li className="text-gray-800">Sports</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Eyewear
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Eyeglasses</li>
                <li className="text-gray-800">Sunglasses</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Jewellery
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Bracelets</li>
                <li className="text-gray-800">Earrings</li>
                <li className="text-gray-800">Necklaces</li>
                <li className="text-gray-800">Pendants</li>
                <li className="text-gray-800">Rings</li>
                <li className="text-gray-800">Tie clips</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Latest in Men's Fashion
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Hats & Caps</li>
                <li className="text-gray-800">Joggers & Sweats</li>
                <li className="text-gray-800">Men's Belts</li>
                <li className="text-gray-800">Polo Shirts</li>
                <li className="text-gray-800">Men's Kurtas</li>
                <li className="text-gray-800">Slip-Ons & Loafers</li>
                <li className="text-gray-800">Men's Jeans</li>
                <li className="text-gray-800">Men's Watches</li>
                <li className="text-gray-800">Sunglasses</li>
                <li className="text-gray-800">T-Shirts</li>
                <li className="text-gray-800">Hoodies & Sweatshirts</li>
                <li className="text-gray-800">Sneakers</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Sunglasses
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Men's Sunglasses</li>
                <li className="text-gray-800">Women's Sunglasses</li>
              </ul>
            </li>
          </ul>
        </li>
        {/* 5th dropdown */}
        <li className="hover:text-purple-600 hover:bg-purple-100 pl-1 ml-[-8px]">
          Babies & Toys<p className="pr-[1px] hidden">></p>
          <ul className="dropdown topCls d shadow-md px-2 pt-3 h-[378px] d3">
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 px-2 ml-[-13px]">
              Diapering & Potty<p className="inline hidden">></p>
              <ul className="shadow-md p-3 dropdown2 h-[378px] ">
                <li className="text-gray-800">Diapers</li>
                <li className="text-gray-800">Cloth Diapers</li>
                <li className="text-gray-800">Diaper Bags</li>
                <li className="text-gray-800">Potty Chair & Seat</li>
                <li className="text-gray-800">Wipes</li>
                <li className="text-gray-800">Huggies</li>
                <li className="text-gray-800">Molfix</li>
                <li className="text-gray-800">Twinkle</li>
                <li className="text-gray-800">Avonee</li>
                <li className="text-gray-800">Smile</li>
                <li className="text-gray-800">Neocare</li>
                <li className="text-gray-800">Happy Nappy</li>
                <li className="text-gray-800">Diapering & Potty</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Feeding
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-72px" }}
              >
                <li className="text-gray-800">Baby & Toddler Foods</li>
                <li className="text-gray-800">Bottle Feeding</li>
                <li className="text-gray-800">Breastfeeding</li>
                <li className="text-gray-800">Feeding Chairs & Seats</li>
                <li className="text-gray-800">Milk Formula</li>
                <li className="text-gray-800">Feeding Bowls, Cups & Bibs</li>
                <li className="text-gray-800">Pacifiers</li>
                <li className="text-gray-800">Cerelac</li>
                <li className="text-gray-800">Lactogen</li>
                <li className="text-gray-800">Nan</li>
                <li className="text-gray-800">Heinz</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-13px]">
              Baby Personal Care
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-102px" }}
              >
                <li className="text-gray-800">Baby Detergent</li>
                <li className="text-gray-800">Bathing Tubs & Toys</li>
                <li className="text-gray-800">Shampoo & Conditioners</li>
                <li className="text-gray-800">Lotions & Creams</li>
                <li className="text-gray-800">Oils</li>
                <li className="text-gray-800">Powders</li>
                <li className="text-gray-800">Soaps & Body Wash</li>
                <li className="text-gray-800">Toothbrushes & Toothpaste</li>
                <li className="text-gray-800">Washcloths & Towels</li>
                <li className="text-gray-800">Kodomo</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Baby Gear
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-132px" }}
              >
                <li className="text-gray-800">Baby Soft Carriers </li>
                <li className="text-gray-800">Baby Car Seats </li>
                <li className="text-gray-800">Kids Bags & Luggage </li>
                <li className="text-gray-800">Playards & Playpens </li>
                <li className="text-gray-800">Strollers & Prams </li>
                <li className="text-gray-800">Bouncers & Jumpers </li>
                <li className="text-gray-800">Swings </li>
                <li className="text-gray-800">Walkers </li>
                <li className="text-gray-800">Kids Paradise </li>
                <li className="text-gray-800">Toy House </li>
                <li className="text-gray-800">Wall Touch </li>
                <li className="text-gray-800">Kids World </li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Nursery
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-162px" }}
              >
                <li className="text-gray-800">Cribs & Cradles</li>
                <li className="text-gray-800">Furniture Sets</li>
                <li className="text-gray-800">Blankets & Wrappers</li>
                <li className="text-gray-800">Baby Pillows & Protection</li>
                <li className="text-gray-800">Baby Bedding Sets</li>
                <li className="text-gray-800">Baby Quilts & Bed Covers</li>
                <li className="text-gray-800">Storage & Organization</li>
                <li className="text-gray-800">Tanzina Boutique's</li>
                <li className="text-gray-800">Livingtex</li>
                <li className="text-gray-800">Wall Touch</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Maternity Care
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-192px" }}
              >
                <li className="text-gray-800">Maternity Belts</li>
                <li className="text-gray-800">Maternity Tops & Intimates</li>
                <li className="text-gray-800">Moisturizers & Creams</li>
                <li className="text-gray-800">Pregnancy Pillows</li>
                <li className="text-gray-800">Palmer's</li>
                <li className="text-gray-800">Zita Matenity Wear</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Eyewear
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Eyeglasses</li>
                <li className="text-gray-800">Sunglasses</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Jewellery
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Bracelets</li>
                <li className="text-gray-800">Earrings</li>
                <li className="text-gray-800">Necklaces</li>
                <li className="text-gray-800">Pendants</li>
                <li className="text-gray-800">Rings</li>
                <li className="text-gray-800">Tie clips</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Latest in Men's Fashion
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Hats & Caps</li>
                <li className="text-gray-800">Joggers & Sweats</li>
                <li className="text-gray-800">Men's Belts</li>
                <li className="text-gray-800">Polo Shirts</li>
                <li className="text-gray-800">Men's Kurtas</li>
                <li className="text-gray-800">Slip-Ons & Loafers</li>
                <li className="text-gray-800">Men's Jeans</li>
                <li className="text-gray-800">Men's Watches</li>
                <li className="text-gray-800">Sunglasses</li>
                <li className="text-gray-800">T-Shirts</li>
                <li className="text-gray-800">Hoodies & Sweatshirts</li>
                <li className="text-gray-800">Sneakers</li>
              </ul>
            </li>
            <li className="text-gray-800 hover:text-purple-600 hover:bg-purple-100 pl-2 ml-[-8px]">
              Sunglasses
              <p className="inline pl-2 hidden">></p>
              <ul
                className="shadow-md p-3 dropdown2 h-[378px] "
                style={{ marginTop: "-252px" }}
              >
                <li className="text-gray-800">Men's Sunglasses</li>
                <li className="text-gray-800">Women's Sunglasses</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Electronics Devices</li>
        <li>TV & Home Appliances</li>
        <li>Electronic Accessories</li>
        <li>Groceries & Pets</li>
        <li>Home & Lifestyle</li>
        <li>Sports & Outdoors</li>
        <li>Automotive & Motorbike</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
