const express = require("express");
const Issue = require("../models/Issue");
const router = express.Router();

/* Student raises issue */
router.post("/raise", async (req, res) => {
  const issue = new Issue(req.body);
  await issue.save();
  res.json({ msg: "Issue submitted" });
});

/* Admin gets all issues */
router.get("/", async (req, res) => {
  const issues = await Issue.find();
  res.json(issues);
});

module.exports = router;
