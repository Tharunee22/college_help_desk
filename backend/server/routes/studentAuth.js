const express = require("express");
const User = require("../models/User");
const router = express.Router();

/* Register */
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ msg: "Student registered" });
});

/* Login */
router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });
  res.json(user);
});

module.exports = router;
