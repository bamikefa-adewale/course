import React from "react";
import CustomHeader from "../ui/CustomHeader";
import CustomButton from "../ui/CustomButton";

const ReactHook = () => {
  const logo =
    "https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiYzZ4Zmp4bmN4ZHhjYmY4YzkybXR2bWlpZTFjaSIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.aLZzXlbUTpuLf1l4gqZwKk_xDszL6aKwRBjlun9iO7c";
  return (
    <section className="my-0 mx-auto lg:max-w-screen-xl px-0 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 py-[20px] px-[20px] items-center lg:items-start">
        <img
          src={logo}
          alt="banner"
          className="w-full  lg:max-w-[400px] rounded-xl"
        />
        <div className="my-6 text-start lg:text-left">
          <CustomHeader title="React hooks Simplified" />
          <p className="text-[18px] sm:text-[20px] lg:text-[18px] ">
            This course covers every single React hook you need to know in order
            to create any application. This course also covers 30 unique custom
            hooks to give you inspiration and ideas on how you can create and
            use React hooks in your application.
          </p>

          <CustomButton title="View Course" />
        </div>
      </div>
    </section>
  );
};

export default ReactHook;
