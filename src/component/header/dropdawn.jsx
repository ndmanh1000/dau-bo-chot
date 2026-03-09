import React, { useState, useEffect, useRef } from "react";
import { Button } from "flowbite-react";
import { MdLocalPhone, MdEmail, MdMessage, MdPhone } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";

import { SiZalo } from "react-icons/si";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef(null);

  // Danh sách dòng và icon
  const items = [
    {
      label: "Nhắn Tin qua Messenger",
      link: "https://m.me/Dauboeplanh.keyavo",
      icon: (
        <FaFacebookMessenger
          size={20}
          className=" border border-red-100 text-[#08A950] bg-white shadow-md p-2 h-10 w-10 rounded-full flex items-center justify-center"
        />
      ),
    },
    {
      label: "Nhắn tin qua Zalo",
      link: "https://zalo.me/0845830236",
      icon: (
        <SiZalo
          size={20}
          className=" border border-red-100 text-[#08A950] bg-white shadow-md p-2 h-10 w-10 rounded-full flex items-center justify-center"
        />
      ),
    },
    {
      label: "0334149388",
      icon: (
        <MdPhone
          size={20}
          className=" border border-red-100 text-white bg-[#08A950] shadow-md p-2 h-10 w-10 rounded-full flex items-center justify-center"
        />
      ),
    },
    {
      label: "cskh.keyavo@gmail.com",
      icon: (
        <MdEmail
          size={20}
          className=" border border-red-100 text-white bg-[#08A950] shadow-md p-2 h-10 w-10 rounded-full flex items-center justify-center"
        />
      ),
    },
  ];

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.dropdown-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const top = rect.bottom + 8; // cách nút 8px
      const right = window.innerWidth - rect.right;
      setPosition({ top, right });
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full sm:w-auto dropdown-container">
      {/* Nút mở dropdown */}
      <Button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center gap-1 bg-[#439907] w-full sm:w-auto rounded-md overflow-hidden"
      >
        <div className="flex flex-row items-center gap-2 sm:gap-3 text-white">
          <MdLocalPhone size={18} className="flex-shrink-0" />
          <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">Liên hệ ngay</p>
        </div>
      </Button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="fixed w-[min(320px,90vw)] bg-white border shadow-xl border-gray-200 rounded-md z-[99999] overflow-hidden"
          style={{ top: position.top, right: position.right }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Danh sách các dòng */}
          <ul className="py-1">
            {items.map((item, index) => (
              <li
                key={index}
                className="px-3 sm:px-4 py-2 hover:bg-gray-100 flex items-center max-w-full cursor-pointer transition-colors duration-200"
              >
                {item.icon && <span className="mr-2 flex-shrink-0">{item.icon}</span>}
                {item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 text-xs sm:text-sm truncate max-w-full hover:text-[#01A848] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-gray-800 text-xs sm:text-sm truncate max-w-full">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
