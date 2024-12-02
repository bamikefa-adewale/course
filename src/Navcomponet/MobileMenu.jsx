import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({ isOpen, onToggle, links, onLogin }) => {
  return (
    <div>
      {/* Mobile Menu Button (Open/Close Toggle) */}
      <button className="lg:hidden text-black" onClick={onToggle}>
        {/* Toggle between open and close icons */}
        {isOpen ? <IoClose size={40} /> : <FiAlignJustify size={40} />}
      </button>

      {/* Mobile Navigation Links - Modal Dropdown */}
      {isOpen && (
        <div className="fixed top-0 right-0 bg-white z-50 w-64 mt-14 py-4 shadow-lg">
          <ul className="flex flex-col gap-4 font-poppins text-[16px] text-black px-4">
            {links.map((link, index) => (
              <li key={index} className="py-2">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-2">
              <button
                onClick={onLogin}
                // className="bg-[#00AAFF] py-2 px-4 rounded-lg text-lg font-semibold text-white"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
