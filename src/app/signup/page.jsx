"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

function page() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      window.location.href = "/login";
    } catch (error) {
      console.log("Signup failed", error.message);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col justify-center items-center w-full md:w-1/3 bg-white rounded-md p-6">
        <h1 className="font-semibold text-[#181380] text-2xl mb-4">
          {loading ? "Processing" : "Sign up"}
        </h1>
        <form className="flex flex-col items-center justify-center w-full my-4">
          <input
            className="w-full p-2 border border-[#181380] rounded-md my-4"
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
          />
          <input
            className="w-full p-2 border border-[#181380] rounded-md my-4"
            type="text"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
          />
          <input
            className="w-full p-2 border border-[#181380] rounded-md my-4"
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
          <input
            className="w-full p-2 border border-[#181380] rounded-md my-4"
            type="password"
            placeholder="Confirm password"
          />
          <button
            onClick={onSignUp}
            type="submit"
            className="w-full p-2 rounded-md text-white bg-[#181380]"
          >
            {buttonDisabled ? "NO SIGN UP" : "SIGN UP"}
          </button>
        </form>
        <p className="font-normal text-[#181380] text-sm mb-4">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold ">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
