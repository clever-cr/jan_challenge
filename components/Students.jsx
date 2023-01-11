import React from "react";

const Students = () => {
  return (
    <div className="px-[175px] sm:px-0">
      <div className="bg-[#00BEFF] relative max-w-[1740px] mx-auto">
        <div className="px-[105px] py-[138px] flex justify-between sm:px-6 sm:flex-col sm:py-[40px] sm:space-y-[36px] ">
          <div className="text-[#262626] space-y-4">
            <h3 className="text-[32px] leading-[42px]  font-bold">Students</h3>
            <p className="text-xl max-w-2xl  leading-[20px]">
              Important news, links, documents, and tips for students of the
              University of Stuttgart: This page offers information on your
              studies.
            </p>
          </div>
          <div className="hidden sm:flex items-center">
            <picture>
              <img className="w-8" src="/right.svg" alt="" />
            </picture>
            <p className="text-sm leading-[18px] text-[#262626] ">
              INFORMATION FOR PROSPECTIVE STUDENTS
            </p>
          </div>

          <div className="bg-gray w-[270px] h-[270px] rounded-full absolute right-[105px] top-[120px] sm:hidden hover:bg-white group">
            <div className="flex flex-col space-y-[75px] px-6 pt-28  items-center ">
              <p className="text-sm leading-[18px] text-white max-w-md group-hover:text-gray">
                INFORMATION FOR PROSPECTIVE STUDENTS
              </p>
              <picture>
                <img
                  className="w-8 group-hover:text-gray"
                  src="/right.svg"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
