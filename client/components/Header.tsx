"use client";
import React, { JSX, useState } from "react";
import { FiMenu, FiX, FiTool, FiShoppingCart, FiInfo } from "react-icons/fi"; // Icons for sidebar

const tabs: { name: string; link: string; icon: JSX.Element }[] = [
  { name: "CNC Tool", link: "/cnc-tool", icon: <FiTool /> },
  { name: "Order", link: "/place-order", icon: <FiShoppingCart /> },
  { name: "About Us", link: "/about-us", icon: <FiInfo /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 bg-[#f8f9fa] shadow-md w-full py-3 flex items-center justify-between px-10 max-lg:hidden">
        <div className="flex items-center gap-1 transition-all duration-300 hover:font-bold hover:cursor-pointer hover:scale-110">
          <img src="/logo.png" alt="CodeNGrave Logo" className="w-10" />
          <p className="text-xl text-gray-900 font-semibold">codeNGrave</p>
        </div>

        <div className="flex items-center justify-center gap-16">
          {tabs.map((tab, index) => (
            <a
              href={tab.link}
              key={index}
              className="text-lg text-gray-700 hover:text-blue-700 duration-300 relative pb-1 
                     after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] 
                     after:bg-blue-700 after:scale-x-0 after:transition hover:after:scale-x-100"
            >
              {tab.name}
            </a>
          ))}
          <button
            className="p-2 px-4 border-2 border-blue-700 text-blue-700 rounded-xl hover:bg-blue-700 hover:text-white duration-300"
            aria-label="Login"
            title="Login to your account"
          >
            Login
          </button>
        </div>
      </header>

      <header className="lg:hidden sticky top-0 z-20 bg-[#f8f9fa] shadow-md w-full py-3 px-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="CodeNGrave Logo" className="w-8" />
          <p className="text-lg text-gray-900 font-semibold">codeNGrave</p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          title="Open navigation menu"
        >
          <FiMenu size={28} className="text-gray-900" />
        </button>
      </header>

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-30 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="CodeNGrave Logo" className="w-8" />
            <p className="text-lg text-gray-900 font-semibold">codeNGrave</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            title="Close navigation menu"
          >
            <FiX size={24} className="text-gray-900" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-5">
          {tabs.map((tab, index) => (
            <a
              href={tab.link}
              key={index}
              className="flex items-center gap-3 text-lg text-gray-800 hover:text-blue-700 hover:bg-gray-100 p-3 rounded-md transition"
            >
              <span className="text-xl text-gray-600">{tab.icon}</span>
              {tab.name}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-5 left-5 right-5">
          <button
            className="w-full p-3 border-2 border-blue-700 text-blue-700 rounded-xl hover:bg-blue-700 hover:text-white duration-300"
            aria-label="Login"
            title="Login to your account"
          >
            Login
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
