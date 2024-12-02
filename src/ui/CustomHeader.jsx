import React from "react";

const CustomHeader = ({ title }) => {
  return (
    <h2 className="text-[28px] leading-6 sm:text-[35px] sm:leading-8 lg:py-6 font-poppins font-bold">
      {title}
    </h2>
  );
};

export default CustomHeader;
