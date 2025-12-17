const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  studentName: String,
  studentEmail: String,
  category: String,
  description: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Issue", IssueSchema);
