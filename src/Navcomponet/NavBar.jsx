import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { links } from "../component/constant/NavLink";
import CustomButton from "../ui/CustomButton";

export const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logo =
    "https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiY2IxbHg1eHJ4YXNvMnlocGl3cjg3cnUyamlteCIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.sih852orbsVSqbH_Ks85JUnpFSN_KbXaS39KKMM_WhM";

  const handleLoginClick = () => {
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-[#f7f8fc] w-full h-auto">
      <div className="my-0 px-4 lg:px-36">
        <nav className="flex lg:gap-[70%] justify-between  items-center py-[25px] px-5">
          <div className="flex gap-20">
            <img src={logo} alt="WebDev Simplified Logo" className="h-10" />

            <ul className="hidden lg:flex gap-8 items-center font-poppins text-[16px] lg:text-[20px] text-black">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button className="hidden lg:block bg-[#00AAFF] py-2 px-4 rounded-lg text-lg font-semibold cursor-pointer text-white">
            Login
          </button>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={menuOpen}
            onToggle={toggleMenu}
            links={links}
            onLogin={handleLoginClick}
          />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
const buttonStyles =
  "hidden lg:block bg-[#00AAFF] py-2 px-4 rounded-lg text-lg font-semibold cursor-pointer text-white";
