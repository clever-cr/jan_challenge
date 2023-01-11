import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="px-[175px] sm:px-0">
      <div className="max-w-[1740px] mx-auto">
        <div className="  bg-primary flex items-center justify-end sm:justify-between ">
          <div className="px-[105px] flex gap-x-[18px] py-3 text-white sm:px-6  ">
            <Link href="page1">University of Stuttgart</Link>
            <picture>
              <img
                className="w-6 border rounded-full "
                src="/arrow.svg"
                alt=""
              />
            </picture>
          </div>
          <div className=" hidden sm:flex sm:items-center- gap-4-">
            <picture>
              <img className="w-10 " src="/language2.svg" alt="" />
            </picture>

            <div className="border-r border-white mx-2"></div>
            <picture>
              <img className="w-10" src="/search2.svg" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
