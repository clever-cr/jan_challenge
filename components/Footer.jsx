import React from "react";
import Link from "next/link";
const Footer = () => {
  const icons = [
    {
      img: "/fr.svg",
      title: "Facebook",
    },
    {
      img: "/ir.svg",
      title: "Instagram",
    },
    {
      img: "/tr.svg",
      title: "Twitter",
    },
    {
      img: "/mr.svg",
      title: "Mastodon",
    },
    {
      img: "/youtube.png",
      title: "Youtube",
    },
    {
      img: "/Lr.svg",
      title: "Facebook",
    },
    {
      img: "/sus.png",
      title: "USUS-Blog",
    },
  ];
  return (
    <div className="px-[175px] sm:px-0">
      <div className="max-w-[1740px] mx-auto">
        <div className="bg-gray px-[105px] pt-[50px] sm:px-5">
          <div className="flex gap-[56px] sm:flex-col">
            <picture>
              <img className="w-[218px]" src="/whitelogo.svg" alt="" />
            </picture>
            <div className="flex gap-[21px] flex-wrap sm:px-[77px] justify-center items-center sm:gap-10">
              {icons.map((item, index) => {
                return (
                  <div key={index} className="space-y-2">
                    <div className="border  border-white flex flex-col justify-center items-center pt-4- rounded-full h-[60px] w-[60px]  ">
                      <picture>
                        <img className="w-6 " src={item.img} alt="" />
                      </picture>
                    </div>

                    <p className="text-base leading-[26px] text-white font-thin opacity-50">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex justify-between pt-[80px] sm:flex-col gap-4 sm:pt-[60px] pb-[80px] ">
              <div className="text-white">
                <h3 className="text-base leading-[21px]">Audience</h3>
                <div className="flex flex-col pt-[15px]">
                  {[
                    "Students",
                    "Employees",
                    "Alumni and supporters",
                    "Industry",
                  ].map((item, index) => {
                    return (
                      <Link
                        className="text-base leading-[26px] underline hover:no-underline"
                        key={index}
                        href="#"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="text-white">
                <h3 className="text-base leading-[21px]">Formalities</h3>
                <div className="flex flex-col pt-[15px]">
                  {[
                    "Students",
                    "Employees",
                    "Alumni and supporters",
                    "Industry",
                  ].map((item, index) => {
                    return (
                      <Link
                        className="text-base leading-[26px] underline hover:no-underline"
                        key={index}
                        href="#"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="text-white">
                <h3 className="text-base leading-[21px]">Services</h3>
                <div className="flex flex-col pt-[15px]">
                  {[
                    "Students",
                    "Employees",
                    "Alumni and supporters",
                    "Industry",
                  ].map((item, index) => {
                    return (
                      <Link
                        className="text-base leading-[26px] underline hover:no-underline"
                        key={index}
                        href="#"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="text-white">
                <h3 className="text-base leading-[21px]">Organization</h3>
                <div className="flex flex-col pt-[15px]">
                  {[
                    "Students",
                    "Employees",
                    "Alumni and supporters",
                    "Industry",
                  ].map((item, index) => {
                    return (
                      <Link
                        className="text-base leading-[26px] underline hover:no-underline"
                        key={index}
                        href="#"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
