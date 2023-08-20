import React from "react";

import { headerLogo as logo } from "../assets/images/index";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex flex-row justify-between items-center max-container">
        <div>
          <img src={logo} className="w-28 h-14" alt="logo" />
        </div>

        {/* links */}

        <ul className=" flex-1 justify-center items-center gap-4 hidden lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-500 text-[17px] font-montserrat leading-normal tracking-normal"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li href="#" className="font-montserrat font-semibold pl-8">
            Sign-up / login-in
          </li>
        </ul>

        {/* hamburger */}

        <div className="block lg:hidden">
          <img
            src={hamburger}
            alt="hamburger-icon"
            className="w-[20px] h-[30px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
