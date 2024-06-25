import dbConnect from "@lib/mongodb";
import mongoose, { Model, Document } from "mongoose";

interface EmailDocument extends Document {
  email: string;
  // Add any other fields you need
}

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const MAX_EMAIL_LENGTH = 55;

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: [
      {
        validator: (value: string) => emailRegex.test(value),
        message: (props: any) =>
          `${props.value} no es un correo electrónico válido`,
      },
      {
        validator: (value: string) => value.length <= MAX_EMAIL_LENGTH,
        message: (props: any) =>
          `El correo electrónico "${props.value}" excede la longitud máxima permitida de ${MAX_EMAIL_LENGTH} caracteres`,
      },
    ],
  },
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

export async function POST(request: Request) {
  try {
    await dbConnect();
    const email = await Email.create(await request.json());
    return new Response(JSON.stringify(email), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to save email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
