import React from "react";

const Cards = () => {
  const data = [
    {
      img: "/pple.jpg",
      title: "Digital Services",
      arrow: "/arrow.svg",
      desc: "C@MPUS - campus management and lectures",
    },
    {
      img: "/pple.jpg",
      title: "Digital Services",
      arrow: "/arrow.svg",
      desc: "C@MPUS - campus management and lectures",
    },
    {
      img: "/pple.jpg",
      title: "Digital Services",
      arrow: "/arrow.svg",
      desc: "C@MPUS - campus management and lectures",
    },
  ];
  return (
    <div className="px-[175px] sm:px-0">
      <div className="max-w-[1740px] mx-auto">
        <div className="px-[105px] bg-white sm:px-5 py-[60px] space-y-[60px]">
          <div className="flex gap-x-9 pt-6 space-y-[14px] sm:flex-col ">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <picture>
                    <img className="sm:px-[87px]" src={item.img} alt="" />
                  </picture>
                  <div className="flex flex-col pt-[20px] space-y-[14px]">
                    <h3 className="text-lg leading-[25px] text-gray font-bold sm:px-[87px] ">
                      {item.title}
                    </h3>
                    <div className="flex ">
                      <picture>
                        <img className="w-10" src={item.arrow} alt="" />
                      </picture>
                      <p className="text-base leading-[19px] text-primary font-bold">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex">
                      <picture>
                        <img src={item.arrow} alt="" />
                      </picture>
                      <p className="text-base leading-[19px] text-primary font-bold">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex">
                      <picture>
                        <img src={item.arrow} alt="" />
                      </picture>
                      <p className="text-base leading-[19px] text-primary font-bold">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex">
                      <picture>
                        <img src={item.arrow} alt="" />
                      </picture>
                      <p className="text-base leading-[19px] text-primary font-bold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-[297px] sm:px-0 sm:pl-[54px]">
            <buttton className="bg-primary text-[13px] leading-[17px] text-white  py-[16px] px-[35px] w-fit hover:bg-gray ">
              STUDY PROGRAMS WEBPAGES FOR STUDENTS
            </buttton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
