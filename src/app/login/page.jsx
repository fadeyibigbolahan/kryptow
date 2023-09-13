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
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLoginIn = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      router.push("/dashboard");
      console.log("Login success", response.data);
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col justify-center items-center w-full md:w-1/3 bg-white rounded-md p-6">
        <h1 className="font-semibold text-[#181380] text-2xl mb-4">
          {loading ? "Processing" : "Sign In"}
        </h1>
        <form className="flex flex-col items-center justify-center w-full my-4">
          <input
            className="w-full p-2 border border-[#181380] rounded-md my-4"
            type="text"
            id="username"
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
          <p className="font-normal text-[#181380] text-sm mb-4">
            Forget password?
          </p>

          <button
            onClick={onLoginIn}
            type="button"
            className="w-full p-2 rounded-md text-white bg-[#181380]"
          >
            SIGN IN
          </button>
        </form>
        <p className="font-normal text-[#181380] text-sm mb-4">
          Don't have an account?{" "}
          <Link href="/signup" className="font-semibold ">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
