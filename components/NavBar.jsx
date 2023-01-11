import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className="px-[175px] sm:px-0 sticky top-0 z-10">
      <div className="max-w-[1740px] mx-auto ">
        <div className="">
          <div className="flex justify-between px-[105px] py-[42px] sm:px-5 bg-white ">
            <picture>
              <img className="w-[297px] sm:w-[223px]" src="/logo.svg" alt="" />
            </picture>

            <div className="flex gap-x-2 items-center">
              {/* <picture>
                <img className="w-11 sm:hidden" src="/language.svg" alt="" />
              </picture> */}
              <div className="flex flex-col items-center justify-center group sm:hidden">
                <div className=" ">
                  <picture>
                    <img className="w-9" src="/mi.png" alt="" />
                  </picture>
                </div>

                <picture>
                  <img
                    className="w-4 group-hover:opacity-0"
                    src="/down.png"
                    alt=""
                  />
                </picture>
              </div>
              <picture>
                <img className="w-8 sm:hidden" src="/search.svg" alt="" />
              </picture>
              <picture>
                <img className="w-8 sm:w-[42px]" src="/menu.svg" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
