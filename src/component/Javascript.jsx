import React from "react";
import CustomHeader from "../ui/CustomHeader";
import CustomButton from "../ui/CustomButton";

const Javascript = () => {
  const logo =
    "https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoidWM5d3lpNG5wbXRhNGhiNzhuazR1cHVibXVoMCIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.HNYkKtblTq7qn0BmpBZm-ZJq0sCeJ8AxxiMRHgmHHiQ";

  return (
    <section className="my-0 mx-auto lg:max-w-screen-xl px-0 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 py-[20px] px-[20px] items-center lg:items-start">
        <img
          src={logo}
          alt="banner"
          className="w-full  lg:max-w-[400px] rounded-xl"
        />
        <div className="my-6 text-start lg:text-left">
          <CustomHeader title="JavaScript Simplified" />
          <p className="text-[18px] sm:text-[20px] lg:text-[18px] my-4">
            The complete guide to JavaScript. Learn how to build JavaScript
            projects without getting stuck.
          </p>
          <CustomButton title="View Course" />
        </div>
      </div>
    </section>
  );
};

export default Javascript;
