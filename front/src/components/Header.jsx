import React from "react";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";

function Header() {
  return (
    <div >
      <div>
        <div className="border-b-[1px]">
          <div className="flex justify-between max-w-[1200px] mx-auto items-center">
            <div>
              <p className="font-[600]">
                We believe we helps people <br /> for happier lives
              </p>
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/gym/img/logo.png"
                alt=""
              />
            </div>
            <div className="flex gap-5 items-center">
              <a href="" className="font-[500]">+880 123 12 658 439 </a>
              <div className="w-[80px] h-[80px] flex items-center justify-center bg-[#f6214bfe]">
                {" "}
                <BsTelephone className="text-[white] text-[20px]" />{" "}
              </div>
            </div>
          </div>
        </div>

        <nav className="flex justify-center py-[20px] max-w-[1200px] mx-auto font-[500] text-[14px]">
          <ul className="flex gap-[50px]">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/weoffer">WE OFFER</Link>
            </li>
            <li>
              <Link to="/topcourse">TOP COURSE</Link>
            </li>
            <li>
              <Link to="/schedule">SCHEDULE</Link>
            </li>
            <li>
              <Link to="/trainer">TRAINER</Link>
            </li>
            <li>
              <Link to="/plan">PLAN</Link>
            </li>
            <li>
              <Link to="/pages">PAGES</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
