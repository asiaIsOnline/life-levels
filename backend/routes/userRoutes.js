const express = require("express");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController")
const { adminOnly, protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// User Management Routes
// Get all users (Admin Only)
router.get("/", protect, adminOnly, getUsers);
// Get a specific user 
router.get("/:id", protect, getUserById); 
// Delete user (Admin Only)
router.delete("/:id", protect, adminOnly, deleteUser);

module.exports = router;