const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Desc: {
      type: String,
      required: true,
    },
    label: [{ type: String }],

    author: {
      type: String,
      required: true,
    },
    projectRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "projectList",
      require,
    },
  },
  {
    timestamps: true,
  }
);

const issueSchema = mongoose.model("issueSchema", IssueSchema);
module.exports = issueSchema;