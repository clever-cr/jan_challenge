import React, { useState } from "react";
import Link from "next/link";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="px-[175px] sm:px-0 sticky top-0 z-10">
      <div className="max-w-[1740px] mx-auto relative">
        <div className="">
          <div
            className={`flex justify-between px-[105px] py-[42px] sm:px-5  ${
              open ? "bg-gray" : "bg-white"
            }`}
          >
            <picture>
              {open ? (
                <img
                  className="w-[297px] sm:w-[223px]"
                  src="/logo-inverted.svg"
                  alt=""
                />
              ) : (
                <img
                  className="w-[297px] sm:w-[223px]"
                  src="/logo.svg"
                  alt=""
                />
              )}
            </picture>

            <div className="flex gap-x-2 items-center">
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
                <img
                  onClick={handleOpen}
                  className="w-8 sm:w-[42px]"
                  src="/menu.svg"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
        {open ? (
          <div className="bg-[#333333] bg-opacity-95 absolute right-0 left-0 h-[80vh]">
            <div className="bg-[#3CCBFF] p-0.5 w-20 ml-[105px] mt-[20px] mb-[20px]"></div>
            <div className="h-[600px] px-[105px] space-y-4 overflow-scroll">
              {[
                "All study programs",
                "Starting out",
                "Study organization",
                "Examination organization",
                "Digital Services",
                "All study programs",
                "Starting out",
                "Study organization",
                "Examination organization",
                "Digital Services",
                "All study programs",
                "Starting out",
                "Study organization",
                "Examination organization",
                "Digital Services",
                "Starting out",
                "Study organization",
                "Examination organization",
                "Digital Services",
                "Starting out",
                "Study organization",
                "Examination organization",
                "Digital Services",
              ].map((item, index) => {
                return (
                  <div key={index}>
                    <Link
                      href={"page1"}
                      className="text-[20px] leading-[32px] text-white hover:text-[#262626] "
                    >
                      {item}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
