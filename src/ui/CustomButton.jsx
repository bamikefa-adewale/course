import React from "react";

const CustomButton = ({ title, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-[#00AAFF] text-white font-bold rounded hover:bg-blue-600"
    >
      {title}
    </button>
  );
};

export default CustomButton;
