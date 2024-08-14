"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

const SideBar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => setMobileMenuIsOpen(true)}
          className="xl:hidden px-2 pt-6 w-max"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          mobileMenuIsOpen
            ? "bg-indigo-400 w-60 min-h-screen rounded-r-xl fixed top-0 left-0 z-20"
            : "hidden w-0 xl:w-1/6 xl:block xl:bg-indigo-400 xl:min-h-screen xl:rounded-r-xl xl:fixed xl:top-0 xl:left-0 z-20"
        }
        onClick={() => setMobileMenuIsOpen(false)}
      >
        <div>
          <div
            className="flex justify-end pr-4 pt-3 xl:hidden"
            onClick={() => setMobileMenuIsOpen(false)}
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={6.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-y-4 pt-10 pl-3">
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/stprm"}>StpRmForKlasik</NavLink>
            <NavLink href={"/karagetir"}>Kara Getir Kod</NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
