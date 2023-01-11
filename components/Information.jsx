import React from "react";

const Information = () => {
  const info = [
    {
      img: "/right.svg",
      title: "All study program",
      desc: "On the webpages of your degree program you will find information on the study program structure, …",
    },
    {
      img: "/right.svg",
      title: "All study program",
      desc: "On the webpages of your degree program you will find information on the study program structure, …",
    },
    {
      img: "/right.svg",
      title: "All study program",
      desc: "On the webpages of your degree program you will find information on the study program structure, …",
    },
    {
      img: "/right.svg",
      title: "All study program",
      desc: "On the webpages of your degree program you will find information on the study program structure, …",
    },
    {
      img: "/right.svg",
      title: "All study program",
      desc: "On the webpages of your degree program you will find information on the study program structure, …",
    },
    {
      img: "/right.svg",
      title: "All study program",
      desc: "On the webpages of your degree program you will find information on the study program structure, …",
    },
    {
      img: "/right.svg",
      title: "All study program",
      desc: "On the webpages of your degree program you will find information on the study program structure, …",
    },
  ];
  return (
    <div className="px-[175px] sm:px-0">
      <div className="max-w-[1740px] mx-auto">
        <div className="bg-primary text-white font-bold px-[105px] py-[50px] sm:px-6">
          <h3 className="text-[26px] leading-[34px]  pb-[50px]">
            Information for students
          </h3>
          <div className="">
            {info.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" grid grid-cols-2 gap-x-[29px] sm:grid-cols-1"
                >
                  <div className="flex space-y-[60px] sm:gap-2 sm:space-y-[20px] items-center group    gap-x-8">
                    <div className="px-[50px] py-[50px] border-2 rounded-full mt-8 sm:mt-0 sm:px-[15px] sm:py-[15px]  group-hover:bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                        fill="currentColor"
                        className="group-hover:text-gray w-9 h-9"
                      >
                        <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-[22px] leading-[29px] sm:text-base sm:leading-[21px]">
                        {item.title}
                      </h3>
                      <p className="text-base leading-[26px] font-thin">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-y-[60px] items-center gap-x-8 sm:gap-2 sm:space-y-[20px] group">
                    <div className="px-[50px] py-[50px] border-2 sm:mt-0 rounded-full mt-8 sm:px-[15px] sm:py-[15px] group-hover:bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                        fill="currentColor"
                        className="group-hover:text-gray w-9 h-9"
                      >
                        <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[22px] leading-[29px] sm:text-base sm:leading-[21px]">
                        {item.title}
                      </h3>
                      <p className="text-base leading-[26px] font-thin">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
