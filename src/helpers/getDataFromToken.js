import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (NextRequest) => {
  try {
    console.log("from toknn");
    const token = NextRequest.cookies.get("token")?.value || "";
    console.log("tttookk", token);
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodedToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};
