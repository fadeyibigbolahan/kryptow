import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

var coinbase = require("coinbase-commerce-node");
var Client = coinbase.Client;
var resources = coinbase.resources;

Client.init(process.env.COINBASE_API_KEY);

connect();

export async function POST(NextRequest) {
  // const reqBody = await NextRequest.json();
  // const { amount, currency } = reqBody;
  // console.log("amm", amount);
  try {
    const charge = await resources.Charge.create({
      name: "Test Charge",
      description: "Test charge description",
      local_price: {
        amount: 100,
        currency: "USD",
      },
      pricing_type: "fixed_price",
      metadata: {
        user_id: "user",
      },
    });

    console.log("running...");

    return NextResponse.json({ charge: charge }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
