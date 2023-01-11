import React from "react";

const NavBar = () => {
  return (
    <div className="px-[175px] sm:px-0">
      <div className="max-w-[1740px] mx-auto">
        <div className="  bg-primary flex items-center justify-end sm:justify-between">
          <div className="px-[105px] flex gap-x-[18px] py-3 text-white sm:px-6   ">
            <p>University of Stuttgart</p>
            <picture>
              <img
                className="w-6 border rounded-full "
                src="/right.svg"
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
        <div className="flex justify-between px-[105px] py-[42px] sm:px-5 bg-white ">
          <picture>
            <img className="w-[297px] sm:w-[223px]" src="/logo.svg" alt="" />
          </picture>

          <div className="flex gap-x-2">
            <picture>
              <img className="w-11 sm:hidden" src="/language.svg" alt="" />
            </picture>
            <picture>
              <img className="w-11 sm:hidden" src="/search.svg" alt="" />
            </picture>
            <picture>
              <img className="w-11 sm:w-[42px]" src="/menu.svg" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
