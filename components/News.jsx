import React from "react";

const News = ({ img, header, title, desc, style, s }) => {
  return (
    <div className="bg-white hover:bg-[#00BEFF] ">
      <div>
        <picture>
          <img className={`${style}`} src={img} alt="" />
        </picture>
      </div>

      <div className="space-y-[15px] py-[30px] px-[20px]">
        <h3
          className={`text-[22px] leading-[29px] text-[#262626] pt-[30px] ${s} `}
        >
          {header}
        </h3>
        <p className="text-[15px] leading-[20px] text-[#262626]">{title}</p>
      </div>
    </div>
  );
};

export default News;
