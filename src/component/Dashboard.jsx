import React, { useState } from "react";
import { RiSettingsLine } from "react-icons/ri";
import { TbDashboard } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { BiSolidOffer, BiChevronRight } from "react-icons/bi";
import { TbHelpSquareFilled, TbUserSquareRounded } from "react-icons/tb";
import manager from "../assets/manger_1.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { SlHandbag } from "react-icons/sl";
import ApexChart from "./Chart";
import Donut from "./Bar";

const Dashboard = () => {
  const [isDarkMode, setDak] = useState(false);
  return (
    <div
      className={` ${
        isDarkMode
          ? "bg-black text-white transition-all ease-in"
          : "bg-white text-black transition-all ease-in"
      } flex`}
    >
      <div className="min-h-screen   text-white cursor-pointer">
        {/* DashBoard */}
        <div className="bg-violet-950 text-center w-56 max-md:w-14 max-md:hover:z-50 max-md:overflow-y-auto  max-md:overflow-hidden  max-md:hover:w-56 min-h-screen max-h-full max-md:transition-all max-md:ease-out max-md:fixed">
          <div className="flex flex-col  w-44 mx-7">
            <h3 className="py-3 mt-3 flex gap-3 text-xl max-md:-mx-3">
              <span className="text-3xl">
                <RiSettingsLine />
              </span>{" "}
              DashBoard
            </h3>
            <ol className="flex flex-col gap-5 -mx-3 mt-10">
              <li className="flex gap-4  py-2  px-1  rounded-md backdrop-blur-md bg-white/30 max-md:-mt-5">
                <span className="text-2xl">
                  <TbDashboard />
                </span>{" "}
                Dashboard
              </li>
              <li
                className="flex gap-4  py-2 px-1  rounded-md  hover:backdrop-blur-md hover:bg-white/30 text-gray-500 hover:text-white transition-all ease-in-out"
                title="Product"
              >
                <span className="text-2xl">
                  <FiBox />
                </span>
                Products
                <span className="mt-1 relative -right-14 text-xl">
                  <BiChevronRight />
                </span>
              </li>
              <li
                className="flex gap-4 px-1   py-2 rounded-md  hover:backdrop-blur-md hover:bg-white/30 text-gray-500 hover:text-white transition-all ease-in-out"
                title="customers"
              >
                <span className="text-2xl  ">
                  <TbUserSquareRounded />
                </span>
                Customers
                <span className="mt-0.5 relative -right-11 text-xl">
                  <BiChevronRight />
                </span>
              </li>
              <li
                className="flex gap-5 mx-0 px-1 py-2  rounded-md hover:backdrop-blur-md hover:bg-white/30 text-gray-500 hover:text-white transition-all ease-in-out"
                title="Income"
              >
                <span className="text-2xl">
                  <IoWallet />
                </span>
                Income
                <span className="mt-1  relative -right-14 text-xl">
                  <BiChevronRight />
                </span>
              </li>
              <li
                className=" flex gap-4  py-2 px-1 mx-0 rounded-md hover:backdrop-blur-md hover:bg-white/30 text-gray-500 hover:text-white transition-all ease-in-out"
                title="Promote"
              >
                <span className="text-2xl">
                  <BiSolidOffer />
                </span>
                Promote
                <span className="mt-1 relative -right-14 text-xl">
                  <BiChevronRight />
                </span>
              </li>
              <li
                className="flex gap-4 py-2 px-1 rounded-md  hover:backdrop-blur-md hover:bg-white/30 text-gray-500 hover:text-white transition-all ease-in-out"
                title="help"
              >
                <span className="text-2xl ">
                  <TbHelpSquareFilled />
                </span>
                Help
                <span className="mt-1 relative -right-20  text-xl">
                  <BiChevronRight />
                </span>
              </li>
            </ol>
            <div className=" backdrop-blur-md bg-white/30  text-sm my-10 py-3 px-2 max-md:py-2  flex gap-1 rounded-md max-md:-mx-5">
              <img
                src={manager}
                className=" scale-1 overflow-hidden h-10 object-cover rounded-md w-10 max-md:-mx-1"
              ></img>
              <div>
                <span>Chris</span>
                <h3 className="mt-1 text-sm text-gray-400 max-md:-mt-1 max-md:mx-3">
                  Product Manger
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto max-md:max-w-full max-md:mx-auto max-2xl:mx-14 ">
        <div className="flex justify-between relative mt-5 mx-5 max-md:flex-y-reverse max-md:mx-14 max-md:left-7 max-md:max-w-md max-md:text-center max-md:h-16 max-md:flex-col ">
          <h2>Hello Chris 👋</h2>
          <span className=" shadow-lg px-2 py-2">
            <label className="absolute bg-white top-3 text-xl max-md:top-9 max-md:left-9">
              <AiOutlineSearch />
            </label>
            <input
              type="search"
              placeholder="               search..."
              className="outline-none text-center"
            />
          </span>
        </div>
        <div className=" w-full relative mx-2 h-44 max-md:h-auto  mt-7 flex justify-around flex-wrap  max-md:mx-8 max-md:w-full   max-md:flex-wrap   max-sm:max-w-sm max-sm:mx-16">
          <div className=" shadow-2xl w-64 h-36 mt-4 rounded-md relative">
            <div className="w-28 bg-green-200 h-28 mt-4 mx-2 rounded-full relative max-md:relative">
              <span className="absolute left-9 top-9 text-4xl text-green-700">
                <FaCircleDollarToSlot />
              </span>
            </div>
            <div className="absolute right-1 top-6">
              <span className="text-gray-300 font-bold text-sm">Earning</span>
              <h3 className="text-xl font-bold">$198K</h3>
              <div className="flex flex-wrap -px-4">
                <span className="text-green-800 font-bold -rotate-90">
                  <BsArrowRightShort />
                </span>
                <span className="text-green-800 font-bold text-sm">37.8% </span>
                <span className="text-sm">this month</span>
              </div>
            </div>
          </div>
          <div className=" shadow-2xl w-64  h-36 mt-4 rounded-md  md:flex-wrap relative">
            <div className="w-28 bg-purple-200 h-28 mt-4 mx-2 rounded-full relative">
              <span className="absolute left-10 top-9 text-4xl text-purple-800">
                <CgNotes />
              </span>
            </div>
            <div className="absolute right-5 top-6">
              <span className="text-gray-300 font-bold text-sm">Orders</span>
              <h3 className="text-xl font-bold">$2.4K</h3>
              <div className="flex flex-wrap -px-4">
                <span className="text-red-800 font-bold rotate-90">
                  <BsArrowRightShort />
                </span>
                <span className="text-red-800 font-bold text-sm">2%</span>
                <span className="text-sm">this month</span>
              </div>
            </div>
          </div>
          <div className=" shadow-2xl w-64  h-36 mt-4 rounded-md relative">
            <div className="w-28 bg-blue-200 h-28 mt-4 mx-2 rounded-full relative">
              <span className="absolute left-8 top-7 text-5xl  text-indigo-500">
                <MdOutlineAccountBalanceWallet />
              </span>
            </div>
            <div className="absolute right-5 top-6">
              <span className="text-gray-300 font-bold text-sm">Balance</span>
              <h3 className="text-xl font-bold">$2.4K</h3>
              <div className="flex flex-wrap -px-4">
                <span className="text-red-800 font-bold rotate-90">
                  <BsArrowRightShort />
                </span>
                <span className="text-red-800 font-bold text-sm">2%</span>
                <span className="text-sm">this month</span>
              </div>
            </div>
          </div>
          <div className=" shadow-2xl w-64  h-36 mt-4 rounded-md relative">
            <div className="w-28 bg-red-300 h-28 mt-4 mx-2 rounded-full relative">
              <span className="absolute left-8 top-7 text-5xl font-bold text-red-700 ">
                <SlHandbag />
              </span>
            </div>
            <div className="absolute right-4 top-6">
              <span className="text-gray-300 font-bold text-sm">Total</span>
              <h3 className="text-xl font-bold">$198K</h3>
              <div className="flex flex-wrap -px-4">
                <span className="text-green-800 font-bold -rotate-90">
                  <BsArrowRightShort />
                </span>
                <span className="text-green-800 font-bold text-sm">11%</span>
                <span className="text-sm">this month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative   flex-wrap overflow-hidden h-96 mt-45  gap-10 max-md:w-3/4 flex justify-between px-7 max-md:relative max-md:flex-wrap max-md:h-screen max-md:max-w-auto max-md:mt-5 max-md:justify-between  max-sm:w-96 max-sm:mx-16 max-lg:mt-36 max-lg:flex  max-xl:mt-14  max-xl:w-screen  max-xl:-mx-106 max-md:mx-20  max-2xl:mt-36">
          <div className="w-3/4 relative  -left-10 top-0 border  max-md:w-screen max-md:-left-2 rounded-md max-sm:-mx-5 max-xl:-mx-5">
            <div className=" shadow-2xl w-full ">
              <ApexChart />
            </div>
          </div>
          <div className=" border h-full  max-md:p-7 absolute mt-auto  right-0  top-0  flex p-1 max-md:absolute max-md:top-96 max-md:left-5  shadow-lg rounded-md max-md:flex max-md:flex-wrap  max-md:mt-10 max-md:mx-10 max-sm:top-74 max-sm:-mt-1 max-sm:w-80 max-sm:mx-5">
            <h2 className="mx-3 mt-2 font-bold absolute max-md:mt-auto max-md:mx-auto max-sm:-mt-5">
              Customers
            </h2>
            <h3 className="mx-3 mt-1 font-semi-bold text-sm absolute top-8  max-md:mt-8 max-md:mx-1 max-sm:-mt-1">
              customers that buy products
            </h3>
            <div className="w-64 h-64 relative right-0 top-4 mt-16 mx-3 p-3 border  shadow-2xl rounded-full max-sm:rounded-full max-sm:mt-2 max-sm:w-full  max-sm:h-64  max-sm:-mx-4">
              <div className="absolute right-10 top-2   max-md:absolute max-md:-right-10 max-md:top-2 max-2xl:-left-11 max-sm:-left-10">
                <Donut />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
