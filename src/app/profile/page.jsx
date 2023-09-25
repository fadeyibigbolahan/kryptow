"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

function page() {
  const [data, setData] = useState("nothing");

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      profile page
      <h2>
        {data === "nothing" ? (
          "nothing"
        ) : (
          <Link href={`/profile/${data}`}></Link>
        )}
      </h2>
      <button onClick={getUserDetails} className="bg-green-800 mt-4">
        get user
      </button>
    </div>
  );
}

export default page;
