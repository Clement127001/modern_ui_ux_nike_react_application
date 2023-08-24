import React, { useState, useSyncExternalStore } from "react";

import { headerLogo as logo } from "../assets/images/index";
import { hamburger } from "../assets/icons";
import { close } from "../assets/icons";
import { navLinks } from "../Constants";
const Nav = () => {
  const [showNav, toggleNav] = useState(false);

  let icon = hamburger;

  if (showNav) {
    icon = close;
  }

  const handleClick = () => {
    toggleNav((prev) => !prev);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full overflow-x-clip">
      <nav className="flex flex-row justify-between items-center max-container ">
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

          <li
            href="#"
            className="font-montserrat font-semibold pl-8"
            key="sign-up"
          >
            Sign-up / login-in
          </li>
        </ul>

        <div
          className={` absolute top-20 right-[100px]  bg-special  px-4 py-10 z-10 max-lg:flex hidden  transition-all duration-500 ${
            showNav ? "translate-x-[50px]" : "translate-x-[400px]"
          } slide-bottom rounded-md`}
        >
          <ul className=" flex flex-1 flex-col justify-center items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white font-semibold text-[18px] font-montserrat leading-normal tracking-normal"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li
              href="#"
              className="font-montserrat font-semibold pl-8 text-white-400 text-[18px]"
              key="sign_up"
            >
              Sign-up / login-in
            </li>
          </ul>
        </div>

        {/* hamburger */}

        <div className="block lg:hidden">
          <img
            src={icon}
            alt="hamburger-icon"
            className="w-[20px] h-[20px]"
            onClick={handleClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
