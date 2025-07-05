const express = require("express");
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Auth Routes
router.post("/register", registerUser); // Register New User
router.post("/login", loginUser); // User Log In
router.get("/profile", protect, getUserProfile); // Display Profile
router.put("/profile", protect, updateUserProfile); // Update Profile

module.exports = router;