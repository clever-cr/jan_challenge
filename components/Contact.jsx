import React from "react";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="px-[175px] sm:px-0">
      <div className="max-w-[1740px] mx-auto">
        <div className="px-[105px] bg-white py-[70px] sm:px-6">
          <h3 className="text-[22px] leading-[29px] pb-[16px] text-gray">
            Contact
          </h3>
          <div className="flex gap-6 sm:flex-col">
            <ContactCard
              img={"/c1.jpg"}
              title={"Dezernat Internationales"}
              profile={"Profile page"}
              tel={"+49 711 685 68566"}
              email={"Write e-mail"}
              eicon={"/mail.svg"}
              ticon={"/call.svg"}
              icon={"/info.svg"}
              picon={"/profile.svg"}
              office={"	Office hours (online):"}
              pi={
                " Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon"
              }
            />
            <ContactCard
              img={"/c2.jpg"}
              title={"Student Counseling Center"}
              profile={"Profile page"}
              tel={"+49 711 685 68566"}
              ticon={"/call.svg"}
              picon={"/profile.svg"}
            />
            <ContactCard
              img={"/c2.jpg"}
              title={"Student Service and Examination Office"}
              profile={"Profile page"}
              picon={"/profile.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
