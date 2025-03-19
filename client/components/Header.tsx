import React from "react";

const tabs: { name: string; link: string }[] = [
  { name: "CNC Tool", link: "/image-to-cnc-convertor" },
  { name: "Order", link: "/place-order" },
  { name: "About Us", link: "/about-us" },
];
export default function Header() {
  return (
    <header className="bg-gray-800 w-full py-3 flex flex-row items-center justify-between px-10">
      <div className="flex flex-row items-center gap-1 hover:cursor-pointer ">
        <img src="/logo.png" alt="" className="w-10" />
        <p className="font-semibold font-inter">codeNGrave</p>
      </div>

      <div className="flex flex-row items-center justify-center gap-20">
        {tabs.map((tab) => {
          return (
            <a
              href={tab.link}
              className=" text-lg relative pb-1 after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-current after:scale-x-0 after:transition hover:after:scale-x-100"
            >
              {tab.name}
            </a>
          );
        })}
        <button className="p-2 border-2 border-black rounded-xl">Login</button>
      </div>
    </header>
  );
}
