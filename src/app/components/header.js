"use client";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import globals from "../globals.css";
import Link from "next/link";
import { useState } from "react";

const Headerbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex">
      <nav className=" bg-white dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 bg-nav ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className=" sm:grid-cols-2 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ml-0 ">
            <Image
              className=""
              src="/images/Bookablebiz.png"
              width="200"
              height="300"
            />
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              onClick={toggleDropdown}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-drop lg:ml-2"
              type="button"
            >
              service categories{" "}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>

          {isOpen && (
            <div
              id="dropdownHover"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}

          <div
            className="sm:flex sm:w-auto items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
            id="navbar-sticky"
          >
            <ul className="sm:flex-row sm:border-0  flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 bg-nav ">
              <li>
                <Link
                  href="/home"
                  className="block py-2 pl-3 pr-4 text-white   md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 md:py-3 lg:py-3 font-color"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:py-3  lg:py-3 font-color"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:py-3  lg:py-3 font-color"
                >
                  contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:py-3  lg:py-3 font-color"
                >
                  login
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:py-3  lg:py-3"
                >
                  <ShoppingCartIcon color="info" />
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="    sm:py-3 sm:pt-1 sm:pb-1 sm:my-3 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-md text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900  md:py-3 md:pt-1 md:pb-1 md:my-3  lg:py-3 lg:pt-1 lg:pb-1 lg:my-3 btn-businees"
                >
                  Businees login
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="serachbar lg:h-20">
          <form className="flex items-center justify-center ">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className=" sm:w-60 sm:h-5 sm:my-6  block w-4 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-96 md:h-5 md:my-6 lg:w-96 lg:h-5 lg:my-6 "
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className=" sm:mb-3 sm:ml-4 sm:rounded-3xl text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mb-3 md:ml-4 md:rounded-3xl lg:mb-3 lg:ml-4 lg:rounded-3xl btn-search"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </nav>
    </header>
  );
};

export default Headerbar;
