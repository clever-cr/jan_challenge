import React from "react";

const Beg = () => {
  return (
    <div className=" px-[175px] sm:px-3">
      <div className="px-[270px] pt-[50px] sm:px-6 bg-white max-w-[1740px] mx-auto">
        <div className=" bg-[#eeeeee] flex flex-col space-y-2 px-[24px] py-[12px]">
          <p className="text-base leading-[21px] text-gray">Begriff</p>
          <input
            placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar"
            className="text-sm leading-5 text-[#555555] py-[12px] px-[14px] outline-none border border-[#eeeeee]"
          />
          <buttton className="bg-primary text-[13px] leading-[17px] text-white py-[16px] px-[35px] w-fit hover:bg-gray">
            BEGRIFF SUCHEN
          </buttton>
        </div>
      </div>
    </div>
  );
};

export default Beg;
