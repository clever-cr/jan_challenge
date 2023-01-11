import React from "react";
import News from "./News";

const Events = () => {
  return (
    <div className="px-[175px] sm:px-0">
      <div className="max-w-[1740px] mx-auto">
        <div className="bg-gray px-[105px] sm:px-6">
          <h3 className="text-[26px] leading-[34px] text-white pt-[50px] pb-[20px]">
            News and events for students
          </h3>

          <div className="grid grid-cols-3 gap-[26px] sm:grid-cols-1">
            <div className="hidden sm:flex sm:flex-col gap-y-[26px]">
              <News
                header={"Newsticker: Information on the coronavirus"}
                title={"Article | 11/10/22"}
              />
              <News
                img={"/house.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                title={"Video | Youtube"}
              />
              <News
                img={"/ppl2.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                title={"Video | Youtube"}
              />
              <News
                img={"/st.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                title={"Video | Youtube"}
              />
            </div>
            <div className="gap-y-[26px] flex flex-col sm:hidden">
              <News
                header={"Newsticker: Information on the coronavirus"}
                title={"Article | 11/10/22"}
              />
              <News
                img={"/st.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                s={"text-base leading-[26px] text-gray font-light"}
                title={"Video | Youtube"}
              />
              <News
                style={"w-[220px] h-[220px] rounded-full ml-[42px] mt-[30px]"}
                img={"/enjoy.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                title={"Video | Youtube"}
              />
            </div>
            <div className="gap-y-[26px] flex flex-col sm:hidden">
              <News
                img={"/house.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                title={"Video | Youtube"}
              />
              <News
                style={"w-[220px] h-[220px] rounded-full ml-[42px] mt-[30px]"}
                img={"/st.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                title={"Video | Youtube"}
              />
              <News
                style={"w-[220px] h-[220px] rounded-full ml-[42px] mt-[30px]"}
                img={"/enjoy.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                title={"Video | Youtube"}
              />
            </div>
            <div className="gap-y-[26px] flex flex-col sm:hidden">
              <News
                img={"/ppl2.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                title={"Video | Youtube"}
              />
              <News
                header={"Newsticker: Information on the coronavirus"}
                title={"Article | 11/10/22"}
              />
              <News
                style={"w-[220px] h-[220px] rounded-full ml-[42px] mt-[30px]"}
                img={"/enjoy.jpg"}
                header={
                  "Latest episode Intelligent systems will help us in crises and in the future"
                }
                title={"Video | Youtube"}
              />
            </div>
          </div>

          <div className="flex justify-center gap-2 pt-[81px] pb-[64px]">
            <button className="text-[13px] leading-[17px] text-white border px-[35px] py-[16px] border-white">
              ALL NEWS
            </button>
            <button className="text-[13px] leading-[17px] text-white border px-[35px] py-[16px] border-white">
              ALL NEWS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
