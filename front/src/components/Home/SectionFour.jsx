import React from "react";

function SectionFour() {
  return (
    <div className="pb-[100px]">
      <div className='bg-[url("https://preview.colorlib.com/theme/gym/img/callto-bg.jpg")] h-[40vh] bg-cover bg-center bg-no-repeat' id="slider-img">
        <div className="flex flex-col justify-center items-center h-[100%] text-[white] gap-[30px] relative z-10">
          <h2 className="font-[600] text-[36px]">Huge Transaction in last Week</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="bg-[#ff3254] border border-[#ff3254] py-[10px] px-[25px] rounded-[20px] hover:bg-[transparent] hover:border hover:border-[white]">BECOME A MEMBER</button>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
