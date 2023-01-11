import React from "react";

const ContactCard = ({
  img,
  title,
  profile,
  tel,
  email,
  office,
  ticon,
  icon2,
  picon,
  eicon,
  icon,
  pi,
}) => {
  return (
    <div>
      <div className="border-2 w-[305px] h-[579px] px-[32px] py-[32px] sm:h-fit sm:w-fit sm:flex-col items-center-">
        <div className="pl-[40px] sm:pl-[20px]- flex-1">
          <picture>
            <img className="rounded-full " src={img} alt="" />
          </picture>
        </div>

        <div className="pt-[46px] flex-1 py-[32px]">
          <h3 className="text-[22px] leading-[29px] text-gray font-bold sm:text-[20px] ">
            {title}
          </h3>
          <div className="space-y-[10px]">
            <div className="flex gap-4 items-center pt-[19px]">
              <picture>
                <img className="w-[23px]" src={picon} alt="" />
              </picture>
              <p className="text-base leading-[26px] text-gray underline hover:no-underline">
                {profile}
              </p>
            </div>
            <div className="flex space-x-4 items-center">
              <picture>
                <img className="w-[23px]" src={ticon} alt="" />
              </picture>
              <p className="text-base leading-[26px] text-gray underline hover:no-underline">
                {tel}
              </p>
            </div>
            <div className="flex space-x-4 items-center">
              <picture>
                <img className="w-[23px]" src={eicon} alt="" />
              </picture>
              <p className="text-base leading-[26px] text-gray underline hover:no-underline">
                {email}
              </p>
            </div>
            <div className="flex space-x-4  ">
              <picture>
                <img className="w-24" src={icon} alt="" />
              </picture>
              <div className="">
                <p className="text-base  leading-[26px] text-gray underline hover:no-underline">
                  {office}
                </p>
                <p className="text-base  leading-[26px] text-gray">{pi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
