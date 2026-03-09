"use client";

import keyavado from "./keyavado.png";
import { MdLocalPhone } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import OrderModal from "../body/modal/order-modal";
import Dropdown from "./dropdawn";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";

export default function Bejob() {
  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Đóng mobile menu nếu đang mở
    const navbarToggle = document.querySelector("[data-collapse-toggle]");
    if (navbarToggle && navbarToggle.getAttribute("aria-expanded") === "true") {
      navbarToggle.click();
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Navbar fluid rounded className="w-full max-w-full overflow-x-hidden overflow-y-visible">
      <NavbarBrand
        href="/"
        className="max-w-[120px] sm:max-w-[150px] md:max-w-none overflow-hidden"
      >
        <div className="overflow-hidden">
          <img 
            src={keyavado} 
            alt="keyavado" 
            className="max-w-full h-auto object-contain"
          />
        </div>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="overflow-x-hidden overflow-y-visible">
        <NavbarLink
          href="#reason-for-use"
          className="text-black cursor-pointer text-sm sm:text-base md:text-lg hover:text-[#01A848] transition-colors duration-300 whitespace-nowrap"
          onClick={handleNavClick("reason-for-use")}
        >
          Lý do sử dụng
        </NavbarLink>
        <NavbarLink
          href="#object-of-use"
          className="text-black cursor-pointer text-sm sm:text-base md:text-lg hover:text-[#01A848] transition-colors duration-300 whitespace-nowrap"
          onClick={handleNavClick("object-of-use")}
        >
          Dành cho ai?
        </NavbarLink>
        <NavbarLink
          href="#endow"
          className="text-black cursor-pointer text-sm sm:text-base md:text-lg hover:text-[#01A848] transition-colors duration-300 whitespace-nowrap"
          onClick={handleNavClick("endow")}
        >
          Ưu đãi
        </NavbarLink>
        <NavbarLink
          href="#feed-back"
          className="text-black cursor-pointer text-sm sm:text-base md:text-lg hover:text-[#01A848] transition-colors duration-300 whitespace-nowrap"
          onClick={handleNavClick("feed-back")}
        >
          Nhận xét
        </NavbarLink>
      </NavbarCollapse>
      <NavbarCollapse className="overflow-x-hidden overflow-y-visible">
        <div className="w-full flex flex-col sm:flex-row gap-2 overflow-x-hidden overflow-y-visible">
          <Dropdown />
          <OrderModal />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
