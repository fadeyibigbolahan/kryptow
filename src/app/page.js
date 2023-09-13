"use client";

import React, { useState } from "react";
import Image from "next/image";
import crypt from "./images/crypt.png";
import btc from "./images/btc.jpg";
import about from "./images/about.png";
import homefont from "./images/homefont.png";
import Link from "next/link";

import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

import { useRouter } from "next/navigation";

const NavbarItem = ({ title, classProps }) => {
  return (
    <li
      className={`mx-6 cursor-pointer ${classProps} hover:text-black text-sm`}
    >
      {title}
    </li>
  );
};

export default function Home() {
  const [toogleMenu, setToogleMenu] = useState(false);

  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex justify-between items-center md:p-10 p-2 w-full h-20 bg-[#040859]">
        <Image src={crypt} alt="Logo" width="350px" height="300px" />
        <div className="md:flex hidden justify-between items-center w-2/5 text-white">
          <a href="#">Home</a>
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#Mission">Mission</a>
          <a href="Contact">Contact</a>
        </div>
        <AiOutlineAlignRight
          className="md:hidden flex"
          size={20}
          color="white"
          onClick={() => setToogleMenu(!toogleMenu)}
        />
        {toogleMenu && (
          <div>
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
                            flex flex-col justify-start items-end rounded-md bg-blue-600 text-white animate-slide-in
                        "
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToogleMenu(false)} />
              </li>
              {["Home", "About", "Services", "Mission", "Contact"].map(
                (item, index) => (
                  <a
                    onClick={() => setToogleMenu(false)}
                    // to={item === "Home" ? "/" : `/${item}`}
                    href={item === "Home" ? "#" : `#${item}`}
                  >
                    <NavbarItem
                      key={item + index}
                      title={item}
                      classProps="my-2 text-lg"
                    />
                  </a>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center w-full bg-black md:p-10 p-2">
        <div className="flex flex-col md:w-1/2 w-full justify-center items-center bg-black">
          <h1 className="text-white text-center md:text-start font-bold md:text-5xl text-2xl my-6">
            LEADING SWAP SYSTEM FOR SECURED & REGULATED DIGITAL TRANSACTIONS
          </h1>
          <p className="text-white text-center md:text-start font-normal text-xl">
            We bridge safe and transparent p2p transaction between buyers and
            sellers that are fully protected by our state of the art blockchain
            asset security node
          </p>
          <div className="flex flex-evenly w-full">
            <div className="flex md:w-1/2 w-full justify-evenly md:justify-between items-center py-2">
              <button
                onClick={() => router.push("/signup")}
                className="bg-[#E67E43] text-white text-lg p-3 w-1/3 rounded-md hover:bg-white hover:text-[#E67E43]"
              >
                Sign up
              </button>
              <button
                onClick={() => router.push("/login")}
                className="bg-[#4c6fe4] text-white text-lg p-3 w-1/3 rounded-md hover:bg-white hover:text-[#4c6fe4]"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:w-1/2 w-full justify-center items-center">
          <Image src={btc} alt="Logo" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full bg-white p-10">
        <h1 className="text-black text-4xl font-bold my-4">
          Trading Steps We Follow
        </h1>
        <div class="grid grid-cols-1 gap-3 md:grid-cols-2 w-full">
          <p className="text-2xl text-center">
            <span className="flex items-center justify-center p-2 bg-black text-white rounded-md text-semibold my-2">
              Step 1:
            </span>{" "}
            Buyer and seller agrees to each other's terms , Then buyers request
            for sellers user email and initiates a p2p trade .
          </p>
          <p className="text-2xl my-4 text-center">
            <span className="flex items-center justify-center p-2 bg-black text-white rounded-md text-semibold my-2">
              Step 2:
            </span>{" "}
            The buyer & seller joins the trade using the "Room ID" thats
            delivered to both parties email, both parties can also locate trade
            rooms by clicking on "Trades"
          </p>
          <p className="text-2xl my-4 text-center">
            <span className="flex items-center justify-center p-2 bg-black text-white rounded-md text-semibold my-2">
              Step 3:
            </span>{" "}
            Buyer & Seller makes payment to trade room,Escrow confirms both
            parties deposits and notifies p2p trade is completed.
          </p>
          <p className="text-2xl my-4 text-center">
            <span className="flex items-center justify-center p-2 bg-black text-white rounded-md text-semibold my-2">
              Step 4:
            </span>{" "}
            Trade complete ✅. Buyers & sellers can choose to easily withdraw
            their assets from the trade room to a personal wallet address or
            move balance to dashboard
          </p>
        </div>
      </div>
      <div
        id="Services"
        className="flex flex-col justify-center items-center bg-[#040859] w-full p-10"
      >
        <h1 className="text-white text-4xl font-bold my-4">Our Core Values</h1>
        <div class="grid grid-cols-1 gap-3 md:grid-cols-3 w-full">
          <div className="flex flex-col justify-start items-center w-full bg-[#4c6fe4] rounded-md p-4">
            <Image src={crypt} alt="Logo" width="200px" height="200px" />
            <h1 className="text-white font-semibold text-xl">100% Encrypted</h1>
            <p className="text-xl my-4 text-center text-white">
              Our system is 100% ecrypted against DDOS attacks and other forms
              of attackes as it is a web3.0 platform.your account information,
              livechat history and transaction information is fully encrypted.
              You are in full control of your data.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center w-full bg-[#4c6fe4] rounded-md p-4">
            <Image src={crypt} alt="Logo" width="200px" height="200px" />
            <h1 className="text-white font-semibold text-xl">
              Instant Exchange
            </h1>
            <p className="text-xl my-4 text-center text-white">
              With all conditions in place, our pair-to-pair transactions takes
              a maximum of 24 hours after Initialization. If the parties of the
              pair transaction pay are available throughout the transaction, it
              usually only takes a few minutes to complete a transaction on
              Escrowapp
            </p>
          </div>
          <div className="flex flex-col justify-start items-center w-full bg-[#4c6fe4] rounded-md p-4">
            <Image src={crypt} alt="Logo" width="200px" height="200px" />
            <h1 className="text-white font-semibold text-xl">
              Safety of Funds
            </h1>
            <p className="text-xl my-4 text-center text-white">
              Assets locked in the platform will not be released until the
              transaction is complete. Funds are stored in our blockchain until
              both parties completes the trading obligations.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center w-full bg-[#4c6fe4] rounded-md p-4">
            <Image src={crypt} alt="Logo" width="200px" height="200px" />
            <h1 className="text-white font-semibold text-xl">Dispute System</h1>
            <p className="text-xl my-4 text-center text-white">
              Take comfort in our excellent dispute system which makes your
              transaction extra safe. In case of any arguments. Our supervisors
              are ready to intervene. Our dispute resolution system has been
              equiped to take care of any dispute that my arise due to
              transaction mistakes
            </p>
          </div>
          <div className="flex flex-col justify-start items-center w-full bg-[#4c6fe4] rounded-md p-4">
            <Image src={crypt} alt="Logo" width="200px" height="200px" />
            <h1 className="text-white font-semibold text-xl">Easy Wallet</h1>
            <p className="text-xl my-4 text-center text-white">
              We have created an easy wallet for traders to safe keep their
              funds even after completed transactions until they wish to
              withdraw to an external wallet or transfer in the case of NFTs.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center w-full bg-[#4c6fe4] rounded-md p-4">
            <Image src={crypt} alt="Logo" width="200px" height="200px" />
            <h1 className="text-white font-semibold text-xl">
              Reliable & Low Cost
            </h1>
            <p className="text-xl my-4 text-center text-white">
              We are reliable, we try to keep our trade fees at a minimal to
              help expand our transaction reach.
            </p>
          </div>
        </div>
      </div>
      <div
        id="About"
        className="flex md:flex-row flex-col items-center justify-center w-full bg-white md:p-10 p-2"
      >
        <div className="flex flex-col md:w-1/2 w-full justify-center items-start bg-white">
          <h1 className="text-black text-center md:text-start font-bold md:text-5xl text-2xl my-6">
            Who are we?
          </h1>
          <p className="text-black text-center md:text-start font-normal text-xl">
            EscrowApp being a property of P2P Services Limited was Originated
            and Incorporated in November 2015 as a management and consultancy
            for financial activities. EscrowApp is one of the world’s most
            secure and trusted payment system for cryptocurrency transactions.
          </p>
          {/* <div className="flex flex-evenly w-full">
            <div className="flex md:w-1/2 w-full justify-evenly md:justify-between items-center py-2">
              <button className="bg-[#E67E43] text-white text-lg p-3 w-1/3 rounded-md">
                Sign up
              </button>
              <button className="bg-[#4c6fe4] text-white text-lg p-3 w-1/3 rounded-md">
                Login
              </button>
            </div>
          </div> */}
        </div>
        <div className="flex md:w-1/2 w-full justify-center items-center">
          <Image src={about} alt="Logo" className="w-full" />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col items-center justify-center w-full bg-white md:p-10 p-2">
        <div className="flex flex-col md:w-1/2 w-full justify-center items-start bg-white">
          <h1 className="text-black text-center md:text-start font-bold md:text-5xl text-2xl my-6">
            Trading Guide
          </h1>
          <p className="text-black text-center md:text-start font-normal text-xl">
            EscrowApp makes it easy for cryptocurrency users who want to trade
            using an escrow payment system, everything is simplified with the
            Step by Step Guide in the trade. Both parties (Buyer & Seller) on
            the Pair transaction can track the activities of each other and see
            when a deposit from either of the parties have been confirmed by the
            system.
          </p>
          {/* <div className="flex flex-evenly w-full">
            <div className="flex md:w-1/2 w-full justify-evenly md:justify-between items-center py-2">
              <button className="bg-[#E67E43] text-white text-lg p-3 w-1/3 rounded-md">
                Sign up
              </button>
              <button className="bg-[#4c6fe4] text-white text-lg p-3 w-1/3 rounded-md">
                Login
              </button>
            </div>
          </div> */}
        </div>
        <div className="flex md:w-1/2 w-full justify-center items-center">
          <Image src={homefont} alt="Logo" className="w-full" />
        </div>
      </div>
      <div
        id="Mission"
        className="flex flex-col items-center justify-start w-full bg-[#040859] p-10"
      >
        <h1 className="text-white text-4xl font-bold my-4">
          Secured TWAP Transactions
        </h1>
        <p className="text-xl text-center text-white">
          Facilitate secure transactions through P2P Dark Pool (ODP) services
          for ultra-high net worth individuals, hedge funds, family offices,
          banks, trading platforms, and legal firms seeking access to
          cryptocurrencies like Bitcoin, Ethereum, Litecoin, and others. Moving
          funds from fiat into cryptocurrency via secure, private transactions
          and flexible distribution channels, including personal TREZOR/Ledger
          delivery, the world’s most secure hardware wallet
        </p>
        <div class="grid grid-cols-1 gap-3 md:grid-cols-2 w-full my-4">
          <div className="flex flex-col justify-start items-center w-full bg-[#4c6fe4] rounded-md p-4">
            <h1 className="text-white font-semibold text-xl">P2P Mechanism</h1>
            <p className="text-lg my-4 text-center text-white">
              The way over the counter trading takes place is quite simple, yet
              quite elegant. As we saw above, P2P trades are those that take
              place outside a standard and conventional exchange. Such type of
              trades can easily take place between two parties directly, thus
              the off-exchange nature. The two parties can find each other in
              nonconventional venues as well. Traditionally an exchange would
              bring trade parties together, whereas, in P2P trading, users can
              find each other online or in chat groups directly and engage in
              the trade of cryptocurrencies through an agreement between
              themselves.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center w-full bg-[#4c6fe4] rounded-md p-4">
            <h1 className="text-white font-semibold text-xl">P2P Mechanism</h1>
            <p className="text-lg my-4 text-center text-white">
              The way over the counter trading takes place is quite simple, yet
              quite elegant. As we saw above, P2P trades are those that take
              place outside a standard and conventional exchange. Such type of
              trades can easily take place between two parties directly, thus
              the off-exchange nature. The two parties can find each other in
              nonconventional venues as well. Traditionally an exchange would
              bring trade parties together, whereas, in P2P trading, users can
              find each other online or in chat groups directly and engage in
              the trade of cryptocurrencies through an agreement between
              themselves.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
