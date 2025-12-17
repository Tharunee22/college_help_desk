const express = require("express");
const router = express.Router();

/* Hardcoded Admin */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@college.com" && password === "admin123") {
    res.json({ role: "admin" });
  } else {
    res.status(400).json({ msg: "Invalid admin login" });
  }
});

module.exports = router;
