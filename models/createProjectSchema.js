const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    issue: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "issueSchema",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const projectList = mongoose.model("projectList", projectSchema);
module.exports = projectList;