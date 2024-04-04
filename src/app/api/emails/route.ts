import dbConnect from "../../../../lib/mongodb";
import mongoose, { Model, Document } from "mongoose";

interface EmailDocument extends Document {
  email: string;
  // Add any other fields you need
}

const emailSchema = new mongoose.Schema({
  email: String,
  // Add any other fields you need
});

const Email: Model<EmailDocument> =
  mongoose.models.Email || mongoose.model("Email", emailSchema);

export async function GET(request: Request) {
  try {
    await dbConnect();
    const emails = await Email.find({});
    return new Response(JSON.stringify(emails), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch emails" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
