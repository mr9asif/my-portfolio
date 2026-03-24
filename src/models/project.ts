import mongoose, { Schema, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
    liveUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = models.Project || mongoose.model("Project", ProjectSchema);

export default Project;