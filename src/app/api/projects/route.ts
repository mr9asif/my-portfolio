import { connectDB } from "@/lib/db";

export async function GET() {
  await connectDB();

  return Response.json({ message: "Check terminal for DB status" });
}