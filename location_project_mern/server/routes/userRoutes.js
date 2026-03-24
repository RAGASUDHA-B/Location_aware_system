const express = require("express");
const router = express.Router();
const User = require("../models/User");

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("User API Working");
});

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// LOGIN
router.post("/login", (req, res) => {
  res.send("Login API");
});

module.exports = router;