import React from "react";
import CustomHeader from "../ui/CustomHeader";
import CustomButton from "../ui/CustomButton";

const Typecript = () => {
  const logo =
    "https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiY3JieDNyem5odnB5dXJvaWZsaWNmemVqbjA2MCIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.9iXDQAi5wnCxFZOv5kHNZziOlBY6iJaVf9dkDXJZIQQ";
  return (
    <section className="my-0 mx-auto lg:max-w-screen-xl px-0 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 py-[20px] px-[20px] items-center lg:items-start">
        <img
          src={logo}
          alt="banner"
          className="w-full  lg:max-w-[400px] rounded-xl"
        />
        <div className="my-6 text-start lg:text-left">
          <CustomHeader title="TypeScript Simplified" />
          <p className="text-[18px] sm:text-[20px] lg:text-[18px] ">
            Instantly increase your earning potential and learn to build
            scalable projects in just 5 hours
          </p>

          <CustomButton title="View Course" />
        </div>
      </div>
    </section>
  );
};

export default Typecript;
