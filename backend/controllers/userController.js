const Task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// @desc    Get all users (Admin Only)
// @route   GET /api/users
// @access  Private (Admin) 
const getUsers = async (req, res) => {
    try {
        const users = await User.find({ role:'user' }).select("-password");

        // Add task counts to each user
        const usersWithTaskCounts = await Promise.all(users.map(async (users) => {
            const notStartedTasks = await Task.countDocuments({
                assignedUser: user._id, 
                status: "Not started"
            });
            const pausedTasks = await Task.countDocuments({
                assignedUser: user._id, 
                status: "Paused"
            });
            const inProgressTasks = await Task.countDocuments({
                assignedUser: user._id, 
                status: "In progress"
            });
            const completedTasks = await Task.countDocuments({
                assignedUser: user._id, 
                status: "Completed"
            });

            return {
                ...user._doc, // Include all existing user data
                notStartedTasks, 
                pausedTasks, 
                inProgressTasks, 
                completedTasks
            }
        }));

        res.json(usersWithTaskCounts);
    } catch (error) {
        res.status(500).json({ 
            message: "Server error.", 
            error: error.message 
        })
    }
}

// @desc    Get user by ID (Admin Only)
// @route   GET /api/users/:id
// @access  Private 
const getUserById = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ 
            message: "Server error.", 
            error: error.message 
        })
    }
}

// @desc    Delete a user (Admin Only)
// @route   DELETE /api/users/:id
// @access  Private (Admin) 
const deleteUser = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ 
            message: "Server error.", 
            error: error.message 
        })
    }
}

module.exports = { getUsers, getUserById, deleteUser }