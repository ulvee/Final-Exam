import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaBasketballBall, FaBehanceSquare, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="pb-[50px] mt-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <p>
            Copyright ©2023 All rights reserved | This template is made with by{" "}
            <a href="" className="text-[#f6214bfe]">Colorlib</a>
          </p>
          <div className="flex gap-[20px]">
            <div className="w-[50px] h-[50px] bg-[black]  flex justify-center items-center">
              <FaFacebookF className="text-[white] text-[30px]" />
            </div>
            <div className="w-[50px] h-[50px] bg-[black] flex justify-center items-center">
              {" "}
              <BsTwitter className="text-[white] text-[30px]" />
            </div>
            <div className="w-[50px] h-[50px] bg-[black]  flex justify-center items-center">
              {" "}
              <FaBasketballBall className="text-[white] text-[30px]" />
            </div>
            <div className="w-[50px] h-[50px] bg-[black]  flex justify-center items-center">
              <FaBehanceSquare className="text-[white] text-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
