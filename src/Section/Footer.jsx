import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-14  max-container  ">
      <div className="flex   max-sm:flex-col gap-10 ">
        <div className="flex  flex-col gap-4">
          <a href="/">
            {" "}
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>

          <p className="lg:max-w-sm font-montserrat text-white-400 text-md leading-7">
            {" "}
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className=" flex gap-4">
            {socialMedia.map((links) => (
              <div className="w-12 h-12 p-3 bg-white rounded-full">
                <img src={links.src} alt={links.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-wrap sm:gap-10 gap-8">
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h4 className="text-xl font-montserrat text-white font-semibold">
                {item.title}
              </h4>

              <ul className="mt-4">
                {item.links.map((link) => (
                  <li className="text-white-400 text-md leading-normal mt-2  hover:text-white cursor-pointer">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-around sm:flex-row flex-col gap-4 max-sm:items-center">
        <div className="flex gap-8">
          <img src={copyrightSign} width={18} height={18} />
          <p className="text-white-400 text-lg">
            Copyright. All rights reserved
          </p>
        </div>
        <p className="text-white-400 text-lg">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
