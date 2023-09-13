"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaChevronRight,
  FaChevronLeft,
  FaMoneyBill,
  FaCreditCard,
} from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import crypt from "../images/crypt.png";

const menu = [
  {
    name: "Dashboard",
    icon: AiFillAppstore,
  },
  {
    name: "Start trade",
    icon: FaMoneyBill,
  },
  {
    name: "Deposit",
    icon: FaCreditCard,
  },
  {
    name: "Withdraw",
    icon: FaCreditCard,
  },
];

function page() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col bg-white ">
      <div className="flex items-center justify-between md:p-8 p-2 w-full bg-[#040859]">
        <div className="flex justify-between items-center p-2 w-1/5 h-20 ">
          <Image src={crypt} alt="Logo" width="350px" height="300px" />
        </div>
        <div className="md:flex hidden justify-evenly items-center w-3/5 text-white">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Mission</p>
          <p>Contact</p>
        </div>
        <div className="flex justify-center items-center w-1/5">
          <p className="text-white mr-4">one@gmail.com</p>
          <button
            onClick={logout}
            className="flex justify-center items-center w-18 rounded-sm bg-white p-2"
            type="button"
          >
            <p className="text-black">Logout</p>
          </button>
        </div>
      </div>
      {/* <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen bg-[#181380] relative`}
      >
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-center items-center w-5 h-5 bg-white rounded-full absolute -right-3 top-9 border-2 border-[#181380]"
        >
          {open === true ? (
            <FaChevronLeft color="blue" size={10} />
          ) : (
            <FaChevronRight color="blue" size={10} />
          )}
        </div>
        <ul className="flex flex-col justify-between p-6 h-1/2">
          {menu.map((m, index) => (
            <li key={index} className="flex items-center text-gray-300 text-sm">
              <m.icon color="white" size={20} />
              <span className="text-white text-lg ml-4">{m.name}</span>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="text-xl flex-1 h-screen md:mx-10">
        <div className="p-7">
          <h1 className="font-semibold">Good day, One</h1>
          <p>Welcome to escrowapp.com</p>
          <div className="flex flex-col justify-between p-1 border font-normal border-[#181380] rounded-md my-4 h-24">
            <p>Available Balance</p>
            <h1 className="font-semibold">$0.00 USD</h1>
          </div>
        </div>

        <div className="p-7">
          <h1 className="font-semibold">Recent activities</h1>
          <div className="flex flex-col justify-center items-center p-5 border font-normal border-[#181380] rounded-md my-4">
            <p>You have no transactions yet.</p>
            <p>Get started by making your first deposit.</p>
            <button
              onClick={() => alert("I'm working")}
              className="flex justify-center items-center rounded-sm bg-[#181380] text-white p-3 m-5"
            >
              <FaCreditCard size={20} className="mr-4" color="white" />
              Deposit
            </button>
          </div>
        </div>

        <div className="p-7">
          <h1 className="font-semibold">Start escrow trade</h1>
          <h1 className="font-semibold">Buyer's details</h1>
          <form className="flex flex-col items-start justify-start w-full my-4">
            <div className="flex flex-col md:flex-row w-full justify-between">
              <input
                className="md:w-[47%] p-1 border font-normal border-[#181380] rounded-md my-4"
                type="text"
                placeholder="Buyer's email"
              />
              <select
                name="cars"
                className="md:w-[47%] p-1 border font-normal border-[#181380] rounded-md my-4"
              >
                <option value="bitcoin">Bitcoin</option>
                <option value="etherum">Etherum</option>
                <option value="tron">Tron</option>
              </select>
            </div>
            <input
              className="w-full p-1 border font-normal border-[#181380] rounded-md my-4"
              type="text"
              placeholder="Buyer's token quantity"
            />

            <h1 className="font-semibold">Seller's details</h1>

            <div className="flex flex-col md:flex-row w-full justify-between">
              <input
                className="md:w-[47%] p-1 border font-normal border-[#181380] rounded-md my-4"
                type="text"
                placeholder="Seller's email"
              />
              <input
                className="md:w-[47%] p-1 border font-normal border-[#181380] rounded-md my-4"
                type="text"
                placeholder="Coin"
              />
            </div>

            <h1 className="font-semibold">P2P Fee</h1>
            <select
              name="cars"
              className="w-full p-1 border font-normal border-[#181380] rounded-md my-4"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            <button
              type="submit"
              className="w-full p-2 rounded-md text-white bg-[#181380]"
            >
              Trade
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
