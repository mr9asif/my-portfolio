import { connectDB } from "@/lib/db";
import Project from "@/models/project";

// GET all projects
export async function GET() {
  await connectDB();

  const projects = await Project.find();

  return Response.json({
    success: true,
    data: projects,
  });
}


// post create project
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    if (!body.title) {
  return Response.json({ success: false, message: "Title required" });
}

    const project = await Project.create(body);

    return Response.json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
      message: "Failed to create project",
    });
  }
}