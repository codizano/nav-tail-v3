import { NextResponse } from "next/server";
import dbConnect from "@lib/mongodb";

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ message: "Connected to MongoDB" });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json({ message: "Failed to connect to MongoDB" });
  }
}
