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
  // const event = coinbase.Webhook.verifyEventBody(
  //   NextRequest.rawBody
  // )
  const rawBody = JSON.stringify(req.body);
  const signature = String(req.headers["x-cc-webhook-signature"]);
  const webhookSecret = String(process.env.COINBASE_SECRET);
  const event = Webhook.verifyEventBody(rawBody, signature, webhookSecret);

  console.log(event);

  if (event.type === "charge:pending") {
    // TODO
    // user paid, but transaction not confirm on blockchain
    console.log("pending");
  }

  if (event.type === "charge:confirmed") {
    let amount = event.data.pricing.local.amount;
    let currency = event.data.pricing.local.currency;
    let user_id = event.data.metadata.user_id;

    console.log(amount, currency, user_id);
  }

  if (event.type === "charge:failed") {
    // TODO
    // charge failed or expired
    console.log("failed");
  }
}
