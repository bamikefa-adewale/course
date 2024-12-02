import React from "react";
import CustomHeader from "../ui/CustomHeader";
import CustomButton from "../ui/CustomButton";

const NextComponent = () => {
  const logo =
    "https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoicGU1YjE0cmlhM3hmM3hrZjd2cXdlenVoYWI2bCIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.scKsZJTF7lh6KNHXcXESkNZdt5FrDd43NsjTBi9xWUc";

  return (
    <section className="my-0 mx-auto lg:max-w-screen-xl px-0 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 py-[20px] px-[20px] items-center lg:items-start">
        <img
          src={logo}
          alt="banner"
          className="w-full  lg:max-w-[400px] rounded-xl"
        />
        <div className="my-6 text-start lg:text-left">
          <CustomHeader title="Next.js Simplified" />
          <p className="text-[18px] sm:text-[20px] lg:text-[18px] my-4">
            Learn how to master all of Next.js's complex features like caching,
            routing, data management so you can build your dream project.
          </p>
          <CustomButton title="View Course" />
        </div>
      </div>
    </section>
  );
};

export default NextComponent;
